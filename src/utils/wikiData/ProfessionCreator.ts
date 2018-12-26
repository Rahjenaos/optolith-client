import { Categories } from '../../constants/Categories';
import { Profession } from '../../types/wiki';
import { List } from '../structures/List';
import { Nothing } from '../structures/Maybe';
import { fromDefault, makeGetters } from '../structures/Record';
import { RequiredExceptCategoryFunction } from './sub/typeHelpers';

const ProfessionCreator =
  fromDefault<Profession> ({
    id: '',
    name: '',
    subname: Nothing,
    ap: 0,
    apOfActivatables: 0,
    dependencies: List.empty,
    prerequisites: List.empty,
    prerequisitesStart: Nothing,
    prerequisitesEnd: Nothing,
    selections: List.empty,
    specialAbilities: List.empty,
    combatTechniques: List.empty,
    skills: List.empty,
    spells: List.empty,
    liturgicalChants: List.empty,
    blessings: List.empty,
    suggestedAdvantages: List.empty,
    suggestedAdvantagesText: Nothing,
    suggestedDisadvantages: List.empty,
    suggestedDisadvantagesText: Nothing,
    unsuitableAdvantages: List.empty,
    unsuitableAdvantagesText: Nothing,
    unsuitableDisadvantages: List.empty,
    unsuitableDisadvantagesText: Nothing,
    isVariantRequired: false,
    variants: List.empty,
    category: Categories.PROFESSIONS,
    gr: 0,
    subgr: 0,
    src: List.empty,
  })

export const ProfessionG = makeGetters (ProfessionCreator)

export const createProfession: RequiredExceptCategoryFunction<Profession> = ProfessionCreator