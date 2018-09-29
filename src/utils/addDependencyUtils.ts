import * as R from 'ramda';
import { ActivatableSkillCategories, Categories } from '../constants/Categories';
import * as Data from '../types/data';
import * as CreateEntryUtils from './createEntryUtils';
import { Just, List, Maybe, Record } from './dataUtils';
import { flip } from './flip';
import { adjustHeroListStateItemOr } from './heroStateUtils';
import { getCategoryById } from './IDUtils';

type IncreasableCreator = (id: string) => Data.ExtendedSkillDependent;

type RecordInterface<T> = T extends Record<infer I> ? I : never;
type ListElement<T> = T extends List<infer I> ? I : never;
type Dependency<T extends Data.Dependent> =
  ListElement<RecordInterface<T>['dependencies']>

const addDependency = <T extends Data.Dependent>(
  add: Dependency<T>
) => (obj: T): Just<T> => Maybe.pure (
  // @ts-ignore
  (obj as any as Record<any>).update<'dependencies'> (
    (dependencies: RecordInterface<T>['dependencies']) =>
      Maybe.pure ((dependencies as List<any>).append (add))
  ) ('dependencies') as T
);

/**
 * Returns needed entry creator for given increasable category.
 * @param category
 */
const getIncreasableCreator: (id: string) => IncreasableCreator = R.pipe (
  getCategoryById,
  category =>
    category.fmap (flip<Categories, List<Categories>, boolean> (List.elem)
                                                               (ActivatableSkillCategories))
      .equals (Maybe.pure (true))
        ? CreateEntryUtils.createActivatableDependentSkill
        : CreateEntryUtils.createDependentSkill
);

export const addAttributeDependency = (
  id: string,
  value: Data.SkillDependency
) => adjustHeroListStateItemOr (
  CreateEntryUtils.createAttributeDependent,
  addDependency<Record<Data.AttributeDependent>> (value),
  id
);

export const addIncreasableDependency = (
  id: string,
  value: Data.SkillDependency
) => adjustHeroListStateItemOr (
  getIncreasableCreator (id),
  addDependency<Data.ExtendedSkillDependent> (value),
  id
);

export const addActivatableDependency = (
  id: string,
  value: Data.ActivatableDependency
) => adjustHeroListStateItemOr (
  CreateEntryUtils.createActivatableDependent,
  addDependency<Record<Data.ActivatableDependent>> (value),
  id
);
