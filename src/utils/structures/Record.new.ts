/**
 * @module Record
 *
 * A record is a simple data structure for key-value pairs where the keys must
 * be `String`s and all values can have different types.
 *
 * @author Lukas Obermann
 */

import { Lens, lens } from './Lens';
import { Just, Maybe } from './Maybe.new';
import { foldl, fromArray, member, OrderedSet } from './OrderedSet.new';
import { show } from './Show';


// CONSTRUCTOR

interface RecordPrototype {
  readonly isRecord: true;
}

type Getters<A extends RecordBase> = {
  [K in keyof A]: (r: Record<A>) => A[K];
}

type Lenses<A extends RecordBase> = {
  [K in keyof A]: Lens<A, A[K]>;
}

export interface Record<A extends RecordBase> extends RecordPrototype {
  readonly values: Readonly<Partial<A>>;
  readonly defaultValues: Readonly<A>;
  readonly keys: OrderedSet<keyof A>;
  readonly prototype: RecordPrototype;
}

export interface RecordCreator<A extends RecordBase> {
  readonly fromPartial: (x: Partial<A>) => Record<A>;
  readonly getters: Getters<A>;
  readonly lenses: Lenses<A>;
}

const RecordPrototype: RecordPrototype =
  Object.create (Object.prototype, { isRecord: { value: true }})

const _Record =
  <A extends RecordBase>
  (keys: OrderedSet<keyof A>) =>
  (def: A) =>
  (specified: Partial<A>): Record<A> =>
    Object.create (
      RecordPrototype,
      {
        values: {
          value: Object.freeze (specified),
          enumerable: true,
        },
        defaultValues: {
          value: def,
          enumerable: true,
        },
        keys: {
          value: keys,
          enumerable: true,
        },
      }
    )

export const fromDefault =
  <A extends RecordBase> (def: A): RecordCreator<A> => {
    const defaultValues = Object.freeze (Object.entries (def) .reduce<A> (
      (acc, [key, value]) => {
        // tslint:disable-next-line: strict-type-predicates
        if (typeof key !== 'string') {
          throw new TypeError (`Record key must be a String! Got ${show (key)} instead.`)
        }

        // tslint:disable-next-line: strict-type-predicates
        if (value === null || value === undefined) {
          throw new TypeError (
            `Record field must not be a nullable value! Got ${show (value)} at key ${show (key)} instead.`
          )
        }

        return {
          ...acc,
          [key]: value,
        };
      },
      {} as A
    ))

    const keys = fromArray (Object.keys (def))

    const getters = Object.freeze (Object.keys (def) .reduce<Getters<A>> (
      (acc, key) => ({
        ...acc,
        [key]: (r: Record<A>) => {
          if (member<keyof A> (key) (r .keys)) {
            const specifiedValue = r .values [key]

            // tslint:disable-next-line: strict-type-predicates
            if (specifiedValue !== null && specifiedValue !== undefined) {
              return specifiedValue as A[typeof key]
            }

            return r .defaultValues [key]
          }

          throw new TypeError (`Key ${show (key)} is not in Record ${show (r)}!`)
        },
      }),
      {} as Getters<A>
    ))

    const lenses = Object.freeze (Object.keys (def) .reduce<Lenses<A>> (
      (acc, key) => ({
        ...acc,
        [key]: lens<Record<A>, A[typeof key]> (getters [key])
                                              (r => x => _Record<A> (r .keys)
                                                                    (r .defaultValues)
                                                                    ({
                                                                      ...r .values,
                                                                      [key]: x,
                                                                    })),
      }),
      {} as Lenses<A>
    ))

    return Object.freeze<RecordCreator<A>> ({
      fromPartial: (x: Partial<A>) =>
        _Record<A>
          (keys)
          (defaultValues)
          (Object.entries (x) .reduce<Partial<A>> (
            // tslint:disable-next-line: strict-type-predicates
            (acc, [key, value]) => member (key) (keys) && value !== null && value !== undefined
              ? { ...acc, [key]: value }
              : acc,
            {}
          )),
      getters,
      lenses,
    })
  }

// MERGING RECORDS

/**
 * `mergeSafe :: Record r => r a -> r a -> r a`
 *
 * `mergeSafe x r` inserts properties from `x` in `r` that are part of `r`. It
 * ignores all other properties in `x`. Returns the updated `Record`.
 */
export const mergeSafe =
  <A extends RecordBase>(x: Record<Partial<A>>) => (r: Record<A>): Record<A> =>
    _Record (r .keys)
            (r .defaultValues)
            (foldl<keyof A, A> (acc => key => ({
                                 ...acc,
                                 // tslint:disable-next-line: strict-type-predicates
                                 [key]: x .values [key] === null || x .values [key] === undefined
                                   ? r .values [key]
                                   : x .values [key],
                               }))
                               ({} as A)
                               (r .keys))

//   // CONVERSION

//   /**
//    * Return all elements of the record.
//    */
//   elems (): List<T[keyof T]> {
//     return List.of (...Object.values (this.value));
//   }

//   /**
//    * Return all keys of the record.
//    */
//   keys (): List<keyof T> {
//     return List.of (...Object.keys (this.value));
//   }

//   /**
//    * Return all key/value pairs in the record.
//    */
//   assocs (): List<Tuple<keyof T, T[keyof T]>> {
//     return List.of (
//       ...Object.entries (this.value).map (
//         ([key, value]) => Tuple.of<keyof T, T[keyof T]> (key) (value)
//       )
//     );
//   }

//   // JS SPECIFIC

//   static toObject<T> (x: Record<T>): T {
//     return x.value;
//   }


// CUSTOM FUNCTIONS

export const toObject = <A extends RecordBase> (r: Record<A>): A =>
  ({ ...r .defaultValues, ...r .values })


// TYPE HELPERS

export interface UnsafeStringKeyObject<V> {
  [id: string]: V;
}

export interface StringKeyObject<V> {
  readonly [id: string]: V;
}

export interface NumberKeyObject<V> {
  readonly [id: number]: V;
}

/**
 * From T remove a set of properties K
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type RecordInterface<T> = T extends Record<infer O> ? O : never

export type RecordKey<K extends keyof T, T> =
  T[K] extends NonNullable<T[K]> ? Just<T[K]> : Maybe<NonNullable<T[K]>>

// type ObjectDeleteProperty<T, D extends keyof T> = {
//   [K in Exclude<keyof T, D>]: T[K];
// };

interface RecordBase {
  [key: string]: any;
}
