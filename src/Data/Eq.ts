/**
 * @module Data.Eq
 *
 * @author Lukas Obermann
 */

import { isEither, isRight } from "./Either";
import { isList } from "./List";
import { isJust, isMaybe, isNothing, Maybe, Some } from "./Maybe";
import { isOrderedMap, OrderedMap } from "./OrderedMap";
import { isOrderedSet, member, OrderedSet } from "./OrderedSet";
import { isPair } from "./Pair";
import { isRecord, Record } from "./Record";
import { show } from "./Show";

/**
 * `(==) :: a -> a -> Bool`
 *
 * Returns if both given values are equal.
 */
export const equals =
  // tslint:disable-next-line: cyclomatic-complexity
  <A extends Some> (x1: A) => (x2: A): boolean => {
    if (typeof x1 !== typeof x2) {
      return false
    }

    if (isMaybe (x1)) {
      return isMaybe (x2)
        && (
          isNothing (x1) && isNothing (x2 as unknown as Maybe<any>)
          || isJust (x1) && isJust (x2) && equals (x1 .value) (x2 .value)
        )
    }

    if (isEither (x1)) {
      return isEither (x2)
        && isRight (x1) === isRight (x2)
        && equals (x1 .value) (x2 .value)
    }

    if (isList (x1)) {
      const equalsNode =
        (xs1: any, xs2: any): boolean =>
          xs1 === undefined
          && xs2 === undefined
          || xs1 !== undefined
          && xs2 !== undefined
          && equals (xs1 .value) (xs2 .value)
          && equalsNode (xs1 .next, xs2 .next)

      return isList (x2) && equalsNode (x1 .head, x2 .head)
    }

    if (isPair (x1)) {
      return isPair (x2)
        && equals (x1 .first) (x2 .first)
        && equals (x1 .second) (x2 .second)
    }

    if (isOrderedSet (x1)) {
      if (isOrderedSet (x2)) {
        const firstValues = [...x1]
        const secondValues = [...x2]

        return OrderedSet.size (x1) === OrderedSet.size (x2)
          && firstValues .every ((e, i) => equals (e) (secondValues [i]))
      }

      return false
    }

    if (isOrderedMap (x1)) {
      if (isOrderedMap (x2)) {
        const firstValues = [...x1]
        const secondValues = [...x2]

        return OrderedMap.size (x1) === OrderedMap.size (x2)
          && firstValues .every (
            ([k, v], i) => {
              const second = secondValues [i]

              return equals (k) (second [0]) && equals (v) (second [1])
            }
          )
      }

      return false
    }

    if (isRecord (x1)) {
      if (isRecord (x2)) {
        return OrderedSet.size (x1 .keys) === OrderedSet.size (x2 .keys)
          && OrderedSet.all
            (key => OrderedSet.member (key) (x2 .keys)
              && equals (getRecordField<typeof x1["defaultValues"]>
                          (key as string)
                          (x1))
                        (getRecordField<typeof x2["defaultValues"]>
                          (key as string)
                          (x2)))
            (x1 .keys)
      }

      return false
    }

    // tslint:disable-next-line: strict-type-predicates
    if (typeof x1 === "bigint") {
      // tslint:disable-next-line: strict-type-predicates
      return typeof x2 === "bigint" && x1 === x2
    }

    if (typeof x1 === "boolean") {
      return typeof x2 === "boolean" && x1 === x2
    }

    if (typeof x1 === "number") {
      return typeof x2 === "number" && x1 === x2
    }

    if (typeof x1 === "string") {
      return typeof x2 === "string" && x1 === x2
    }

    if (typeof x1 === "symbol") {
      return typeof x2 === "symbol" && x1 === x2
    }

    if (x1 === undefined) {
      return x2 === undefined
    }

    if (x1 === null) {
      return x2 === null
    }

    if (x1 instanceof Date) {
      return x2 instanceof Date && x1 .toISOString () === x2 .toISOString ()
    }

    return x1 === x2
  }

/**
 * `(!=) :: Maybe a -> Maybe a -> Bool`
 *
 * Returns if both given values are not equal.
 */
export const notEquals =
  <A extends Some> (m1: A) => (m2: A): boolean =>
    !equals (m1) (m2)

const getRecordField = <A> (key: keyof A) => (r: Record<A>) => {
  if (member (key as string) (r .keys)) {
    const specifiedValue = r .values [key]

    // tslint:disable-next-line: strict-type-predicates
    if (specifiedValue !== null && specifiedValue !== undefined) {
      return specifiedValue as A[typeof key]
    }

    return r .defaultValues [key]
  }

  throw new TypeError (`Key ${show (key)} is not in Record ${show (r)}!`)
}


// NAMESPACED FUNCTIONS

export const Eq = {
  equals,
  notEquals,
}