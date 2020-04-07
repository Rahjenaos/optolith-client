open Json.Decode;

[@bs.val] external _stringify: Js.Json.t => string = "JSON.stringify";

/*type yamlData = {
    advantagesL10n: Js.Json.t,
    advantagesUniv: Js.Json.t,
    animistForcesL10n: Js.Json.t,
    animistForcesUniv: Js.Json.t,
    arcaneBardTraditionsL10n: Js.Json.t,
    arcaneDancerTraditionsL10n: Js.Json.t,
    armorTypesL10n: Js.Json.t,
    aspectsL10n: Js.Json.t,
    attributesL10n: Js.Json.t,
    blessedTraditionsL10n: Js.Json.t,
    blessedTraditionsUniv: Js.Json.t,
    blessingsL10n: Js.Json.t,
    blessingsUniv: Js.Json.t,
    booksL10n: Js.Json.t,
    brewsL10n: Js.Json.t,
    cantripsL10n: Js.Json.t,
    cantripsUniv: Js.Json.t,
    combatSpecialAbilityGroupsL10n: Js.Json.t,
    combatTechniqueGroupsL10n: Js.Json.t,
    combatTechniquesL10n: Js.Json.t,
    combatTechniquesUniv: Js.Json.t,
    conditionsL10n: Js.Json.t,
    culturesL10n: Js.Json.t,
    culturesUniv: Js.Json.t,
    cursesL10n: Js.Json.t,
    cursesUniv: Js.Json.t,
    derivedCharacteristicsL10n: Js.Json.t,
    disadvantagesL10n: Js.Json.t,
    disadvantagesUniv: Js.Json.t,
    dominationRitualsL10n: Js.Json.t,
    dominationRitualsUniv: Js.Json.t,
    elvenMagicalSongsL10n: Js.Json.t,
    elvenMagicalSongsUniv: Js.Json.t,
    equipmentL10n: Js.Json.t,
    equipmentUniv: Js.Json.t,
    equipmentGroupsL10n: Js.Json.t,
    equipmentPackagesL10n: Js.Json.t,
    equipmentPackagesUniv: Js.Json.t,
    experienceLevelsL10n: Js.Json.t,
    experienceLevelsUniv: Js.Json.t,
    eyeColorsL10n: Js.Json.t,
    focusRulesL10n: Js.Json.t,
    focusRulesUniv: Js.Json.t,
    geodeRitualsL10n: Js.Json.t,
    geodeRitualsUniv: Js.Json.t,
    hairColorsL10n: Js.Json.t,
    liturgicalChantEnhancementsL10n: Js.Json.t,
    liturgicalChantEnhancementsUniv: Js.Json.t,
    liturgicalChantGroupsL10n: Js.Json.t,
    liturgicalChantsL10n: Js.Json.t,
    liturgicalChantsUniv: Js.Json.t,
    magicalDancesL10n: Js.Json.t,
    magicalDancesUniv: Js.Json.t,
    magicalMelodiesL10n: Js.Json.t,
    magicalMelodiesUniv: Js.Json.t,
    magicalTraditionsL10n: Js.Json.t,
    magicalTraditionsUniv: Js.Json.t,
    optionalRulesL10n: Js.Json.t,
    pactsL10n: Js.Json.t,
    professionsL10n: Js.Json.t,
    professionsUniv: Js.Json.t,
    professionVariantsL10n: Js.Json.t,
    professionVariantsUniv: Js.Json.t,
    propertiesL10n: Js.Json.t,
    racesL10n: Js.Json.t,
    racesUniv: Js.Json.t,
    raceVariantsL10n: Js.Json.t,
    raceVariantsUniv: Js.Json.t,
    reachesL10n: Js.Json.t,
    rogueSpellsL10n: Js.Json.t,
    rogueSpellsUniv: Js.Json.t,
    skillGroupsL10n: Js.Json.t,
    skillsL10n: Js.Json.t,
    skillsUniv: Js.Json.t,
    socialStatusesL10n: Js.Json.t,
    specialAbilitiesL10n: Js.Json.t,
    specialAbilitiesUniv: Js.Json.t,
    specialAbilityGroupsL10n: Js.Json.t,
    spellEnhancementsL10n: Js.Json.t,
    spellEnhancementsUniv: Js.Json.t,
    spellGroupsL10n: Js.Json.t,
    spellsL10n: Js.Json.t,
    spellsUniv: Js.Json.t,
    statesL10n: Js.Json.t,
    subjectsL10n: Js.Json.t,
    tribesL10n: Js.Json.t,
    uiL10n: Js.Json.t,
    zibiljaRitualsL10n: Js.Json.t,
    zibiljaRitualsUniv: Js.Json.t,
  };

  module Id = {
    let generic = (str, json) =>
      (field("scope", const(str), json), field("value", int, json)) |> snd;

    let experienceLevel = generic("ExperienceLevel");
    let race = generic("Race");
    let culture = generic("Culture");
    let profession = generic("Profession");
    let attribute = generic("Attribute");
    let advantage = generic("Advantage");
    let disadvantage = generic("Disadvantage");
    let skill = generic("Skill");
    let combatTechnique = generic("CombatTechnique");
    let spell = generic("Spell");
    let curse = generic("Curse");
    let elvenMagicalSong = generic("ElvenMagicalSong");
    let dominationRitual = generic("DominationRitual");
    let magicalMelody = generic("MagicalMelody");
    let magicalDance = generic("MagicalDance");
    let rogueSpell = generic("RogueSpell");
    let animistForce = generic("AnimistForce");
    let geodeRitual = generic("GeodeRitual");
    let zibiljaRitual = generic("ZibiljaRitual");
    let cantrip = generic("Cantrip");
    let liturgicalChant = generic("LiturgicalChant");
    let blessing = generic("Blessing");
    let specialAbility = generic("SpecialAbility");
    let item = generic("Item");
    let equipmentPackage = generic("EquipmentPackage");
    let hitZoneArmor = generic("HitZoneArmor");
    let familiar = generic("Familiar");
    let animal = generic("Animal");
    let focusRule = generic("FocusRule");
    let optionalRule = generic("OptionalRule");
    let condition = generic("Condition");
    let state = generic("State");
  };

  module AdvantagesL10n = {
    // TODO

    type t = {id: int};

    let%private l10n = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.advantagesL10n |> list(l10n);
  };

  module AdvantagesUniv = {
    // TODO

    type t = {id: int};

    let%private univ = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.advantagesUniv |> list(univ);
  };

  module ArcaneBardTraditionsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.arcaneBardTraditionsL10n |> list(l10n);
  };

  module ArcaneDancerTraditionsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.arcaneDancerTraditionsL10n |> list(l10n);
  };

  module ArmorTypesL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.armorTypesL10n |> list(l10n);
  };

  module AspectsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.aspectsL10n |> list(l10n);
  };

  module CombatSpecialAbilityGroupsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.combatSpecialAbilityGroupsL10n |> list(l10n);
  };

  module CombatTechniqueGroupsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.combatTechniqueGroupsL10n |> list(l10n);
  };

  module CulturesL10n = {
    type t = {
      id: int,
      name: string,
      areaKnowledge: string,
      areaKnowledgeShort: string,
      commonMundaneProfessions: Maybe.t(string),
      commonMagicalProfessions: Maybe.t(string),
      commonBlessedProfessions: Maybe.t(string),
      commonAdvantages: Maybe.t(string),
      commonDisadvantages: Maybe.t(string),
      uncommonAdvantages: Maybe.t(string),
      uncommonDisadvantages: Maybe.t(string),
      commonNames: string,
    };

    let%private l10n = json => {
      id: json |> field("id", int),
      name: json |> field("name", string),
      areaKnowledge: json |> field("areaKnowledge", string),
      areaKnowledgeShort: json |> field("areaKnowledgeShort", string),
      commonMundaneProfessions:
        json |> field("commonMundaneProfessions", maybe(string)),
      commonMagicalProfessions:
        json |> field("commonMagicalProfessions", maybe(string)),
      commonBlessedProfessions:
        json |> field("commonBlessedProfessions", maybe(string)),
      commonAdvantages: json |> field("commonAdvantages", maybe(string)),
      commonDisadvantages: json |> field("commonDisadvantages", maybe(string)),
      uncommonAdvantages: json |> field("uncommonAdvantages", maybe(string)),
      uncommonDisadvantages:
        json |> field("uncommonDisadvantages", maybe(string)),
      commonNames: json |> field("commonNames", string),
    };

    let fromJson = yaml => yaml.culturesL10n |> list(l10n);
  };

  module CulturesUniv = {
    // TODO

    type exceptions =
      | Single(int)
      | Group(int);

    // let%private exceptions = maybe(list(oneOf([])))

    type t = {
      id: int,
      // languages: list(int),
      // literacy: Maybe.t(list(int)),
      // social: list(int),
      // commonMundaneProfessionsAll: boolean,
      // commonMundaneProfessionsExceptions: maybe(list(exception)),
      // commonMagicalProfessionsAll: boolean,
      // commonMagicalProfessionsExceptions: maybe(list(exception)),
      // commonBlessedProfessionsAll: boolean,
      // commonBlessedProfessionsExceptions: maybe(list(exception)),
      // commonAdvantages: Maybe.t(list(int)),
      // commonDisadvantages: Maybe.t(list(int)),
      // uncommonAdvantages: Maybe.t(list(int)),
      // uncommonDisadvantages: Maybe.t(list(int)),
      // commonSkills: list(int),
      // uncommonSkills: Maybe.t(list(int)),
      // culturalPackageCost: int,
      // culturalPackageSkills: list((int, int)),
    };

    let%private univ = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.culturesUniv |> list(univ);
  };

  module DisadvantagesL10n = {
    // TODO

    type t = {id: int};

    let%private l10n = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.disadvantagesL10n |> list(l10n);
  };

  module DisadvantagesUniv = {
    // TODO

    type t = {id: int};

    let%private univ = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.disadvantagesUniv |> list(univ);
  };

  module EquipmentL10n = {
    // TODO

    type t = {id: int};

    let%private l10n = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.equipmentL10n |> list(l10n);
  };

  module EquipmentUniv = {
    // TODO

    type t = {id: int};

    let%private univ = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.equipmentUniv |> list(univ);
  };

  module EquipmentGroupsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.equipmentGroupsL10n |> list(l10n);
  };

  module EyeColorsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.eyeColorsL10n |> list(l10n);
  };

  module HairColorsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.hairColorsL10n |> list(l10n);
  };

  module LiturgicalChantGroupsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.liturgicalChantGroupsL10n |> list(l10n);
  };

  module ProfessionsL10n = {
    // TODO

    type t = {id: int};

    let%private l10n = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.professionsL10n |> list(l10n);
  };

  module ProfessionsUniv = {
    // TODO

    module Options = {
      module SkillSpecialization = {
        let fromJson = oneOrManyInt;
      };

      module LanguagesAndScripts = {
        let fromJson = int;
      };

      module CombatTechniques = {
        type t = Static.Profession.Options.CombatTechniqueSelection.t;
        type second = Static.Profession.Options.CombatTechniqueSelection.second;

        let second = (json): second => {
          amount: json |> field("amount", int),
          value: json |> field("value", int),
        };

        let fromJson = (json): t => {
          amount: json |> field("amount", int),
          value: json |> field("value", int),
          second: json |> field("second", maybe(second)),
          sid: json |> field("sid", list(int)),
        };
      };

      module Cantrips = {
        type t = Static.Profession.Options.CantripSelection.t;

        let fromJson = (json): t => {
          amount: json |> field("amount", int),
          sid: json |> field("sid", list(int)),
        };
      };

      module Curses = {
        let fromJson = int;
      };

      module Skills = {
        type t = Static.Profession.Options.SkillSelection.t;

        let fromJson = (json): t => {
          gr: json |> field("gr", maybe(int)),
          value: json |> field("value", int),
        };
      };

      module TerrainKnowledge = {
        let fromJson = list(int);
      };
    };

    type t = {id: int};

    let%private univ = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.professionsUniv |> list(univ);
  };

  module ProfessionVariantsL10n = {
    // TODO

    type t = {id: int};

    let%private l10n = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.professionVariantsL10n |> list(l10n);
  };

  module ProfessionVariantsUniv = {
    // TODO

    module Options = {
      module SkillSpecialization = {
        type t = Static.Profession.Options.SkillSpecializationSelection.tForVariant;

        let fromJson = json =>
          json
          |> oneOf([
               json =>
                 json
                 |> ProfessionsUniv.Options.SkillSpecialization.fromJson
                 |> ((x) => (Override(x): t)),
               json => json |> map(_: t => Remove, const(false)),
             ]);
      };

      module CombatTechniques = {
        type t = Static.Profession.Options.CombatTechniqueSelection.tForVariant;
        type main = Static.Profession.Options.CombatTechniqueSelection.tWithReplace;
        type second = Static.Profession.Options.CombatTechniqueSelection.secondForVariant;

        let second = json =>
          json
          |> oneOf([
               json =>
                 json
                 |> ProfessionsUniv.Options.CombatTechniques.second
                 |> ((x) => (Override(x): second)),
               json => json |> map(_: second => Remove, const(false)),
             ]);

        let fromJson = json =>
          json
          |> oneOf([
               json =>
                 (
                   {
                     amount: json |> field("amount", int),
                     value: json |> field("value", int),
                     second: json |> field("second", maybe(second)),
                     sid: json |> field("sid", list(int)),
                   }: main
                 )
                 |> ((x) => (Override(x): t)),
               json => json |> map(_: t => Remove, const(false)),
             ]);
      };
    };

    type t = {id: int};

    let%private univ = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.professionVariantsUniv |> list(univ);
  };

  module PropertiesL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.propertiesL10n |> list(l10n);
  };

  module ReachesL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.reachesL10n |> list(l10n);
  };

  module SocialStatusesL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.socialStatusesL10n |> list(l10n);
  };

  module SpecialAbilitiesL10n = {
    // TODO

    type t = {id: int};

    let%private l10n = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.specialAbilitiesL10n |> list(l10n);
  };

  module SpecialAbilitiesUniv = {
    // TODO

    type t = {id: int};

    let%private univ = json => {id: json |> field("id", int)};

    let fromJson = yaml => yaml.specialAbilitiesUniv |> list(univ);
  };

  module SpecialAbilityGroupsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.specialAbilityGroupsL10n |> list(l10n);
  };

  module SpellGroupsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.spellGroupsL10n |> list(l10n);
  };

  module SubjectsL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.subjectsL10n |> list(l10n);
  };

  module SupportedLanguagesL10n = {
    let%private l10n = json => (
      json |> field("id", string),
      json |> field("name", string),
    );

    let fromJson = list(l10n);
  };

  module TribesL10n = {
    let%private l10n = json => (
      json |> field("id", int),
      json |> field("name", string),
    );

    let fromJson = yaml => yaml.tribesL10n |> list(l10n);
  };

  module UI = {
    include RawUIMessages;

    let fromJson = yaml => yaml.uiL10n |> list(l10n);
  };
  */
