import { any, filter, length, List } from "../../Data/List";
import { Record } from "../../Data/Record";
import { ActivatableDependent } from "../Models/ActiveEntries/ActivatableDependent";
import { HeroModel, HeroModelRecord } from "../Models/Hero/HeroModel";
import { SpecialAbility } from "../Models/Wiki/SpecialAbility";
import { WikiModel, WikiModelRecord } from "../Models/Wiki/WikiModel";
import { isActive } from "./A/Activatable/isActive";
import { getAllEntriesByGroup } from "./heroStateUtils";

const { specialAbilities: wikiSpecialAbilities } = WikiModel.A
const { specialAbilities } = HeroModel.A

/**
 * Return all active special ability `ActivatableDependent` entries of the
 * specified group(s).
 */
export const getActiveGroupEntries =
  (wiki: WikiModelRecord) =>
  (state: HeroModelRecord) =>
  (...groups: number[]): List<Record<ActivatableDependent>> =>
    filter (isActive)
           (getAllEntriesByGroup<Record<ActivatableDependent>, Record<SpecialAbility>>
             (wikiSpecialAbilities (wiki))
             (specialAbilities (state))
             (...groups))

/**
 * Count all active special abilitys of the specified group(s).
 */
export const countActiveGroupEntries =
  (wiki: WikiModelRecord) =>
  (state: HeroModelRecord) =>
  (...groups: number[]): number =>
    length (getActiveGroupEntries (wiki) (state) (...groups))

/**
 * Checks if there is at least one active special ability `ActivatableDependent`
 * of the specified group(s).
 */
export const hasActiveGroupEntry =
  (wiki: WikiModelRecord) =>
  (state: HeroModelRecord) =>
  (...groups: number[]): boolean =>
    any (isActive)
        (getAllEntriesByGroup<Record<ActivatableDependent>, Record<SpecialAbility>>
          (wikiSpecialAbilities (wiki))
          (specialAbilities (state))
          (...groups))