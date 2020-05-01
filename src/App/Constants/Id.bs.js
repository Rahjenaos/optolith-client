// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Int$OptolithClient = require("../../Data/Int.bs.js");

function unsafePhaseFromInt(id) {
  var switcher = id - 1 | 0;
  if (switcher > 2 || switcher < 0) {
    return Pervasives.invalid_arg("unsafeFromInt: " + (Int$OptolithClient.show(id) + " is not a valid phase"));
  } else {
    return switcher;
  }
}

function phaseToInt(id) {
  return id + 1 | 0;
}

function unsafeExperienceLevelFromInt(id) {
  var switcher = id - 1 | 0;
  if (switcher > 6 || switcher < 0) {
    return Pervasives.invalid_arg("unsafeFromInt: " + (Int$OptolithClient.show(id) + " is not a valid experience level"));
  } else {
    return switcher;
  }
}

function experienceLevelToInt(id) {
  return id + 1 | 0;
}

function unsafeAttributeFromInt(id) {
  var switcher = id - 1 | 0;
  if (switcher > 7 || switcher < 0) {
    return Pervasives.invalid_arg("unsafeFromInt: " + (Int$OptolithClient.show(id) + " is not a valid attribute"));
  } else {
    return switcher;
  }
}

function attributeToInt(id) {
  return id + 1 | 0;
}

function unsafeDerivedCharacteristicFromString(id) {
  switch (id) {
    case "AE" :
        return /* ArcaneEnergy */1;
    case "DO" :
        return /* Dodge */5;
    case "INI" :
        return /* Initiative */6;
    case "KP" :
        return /* KarmaPoints */2;
    case "LP" :
        return /* LifePoints */0;
    case "MOV" :
        return /* Movement */7;
    case "SPI" :
        return /* Spirit */3;
    case "TOU" :
        return /* Toughness */4;
    case "WT" :
        return /* WoundThreshold */8;
    default:
      return Pervasives.invalid_arg("unsafeFromInt: " + (id + " is not a valid derived characteristic"));
  }
}

function derivedCharacteristicToString(id) {
  switch (id) {
    case /* LifePoints */0 :
        return "LP";
    case /* ArcaneEnergy */1 :
        return "AE";
    case /* KarmaPoints */2 :
        return "KP";
    case /* Spirit */3 :
        return "SPI";
    case /* Toughness */4 :
        return "TOU";
    case /* Dodge */5 :
        return "DO";
    case /* Initiative */6 :
        return "INI";
    case /* Movement */7 :
        return "MOV";
    case /* WoundThreshold */8 :
        return "WT";
    
  }
}

function advantageFromInt(id) {
  switch (id) {
    case 4 :
        return /* Aptitude */0;
    case 9 :
        return /* Nimble */1;
    case 12 :
        return /* Blessed */2;
    case 14 :
        return /* Luck */3;
    case 16 :
        return /* ExceptionalSkill */4;
    case 17 :
        return /* ExceptionalCombatTechnique */5;
    case 23 :
        return /* IncreasedAstralPower */6;
    case 24 :
        return /* IncreasedKarmaPoints */7;
    case 25 :
        return /* IncreasedLifePoints */8;
    case 26 :
        return /* IncreasedSpirit */9;
    case 27 :
        return /* IncreasedToughness */10;
    case 28 :
        return /* ImmunityToPoison */11;
    case 29 :
        return /* ImmunityToDisease */12;
    case 32 :
        return /* MagicalAttunement */13;
    case 36 :
        return /* Rich */14;
    case 40 :
        return /* SociallyAdaptable */15;
    case 46 :
        return /* InspireConfidence */16;
    case 47 :
        return /* WeaponAptitude */17;
    case 50 :
        return /* Spellcaster */18;
    case 54 :
        return /* Unyielding */19;
    case 58 :
        return /* LargeSpellSelection */20;
    case 68 :
        return /* HatredFor */21;
    case 77 :
        return /* Prediger */22;
    case 78 :
        return /* Visionaer */23;
    case 79 :
        return /* ZahlreichePredigten */24;
    case 80 :
        return /* ZahlreicheVisionen */25;
    case 92 :
        return /* LeichterGang */26;
    case 5 :
    case 6 :
    case 7 :
    case 8 :
    case 10 :
    case 11 :
    case 13 :
    case 15 :
    case 18 :
    case 19 :
    case 20 :
    case 21 :
    case 22 :
    case 30 :
    case 31 :
    case 33 :
    case 34 :
    case 35 :
    case 37 :
    case 38 :
    case 39 :
    case 41 :
    case 42 :
    case 43 :
    case 44 :
    case 45 :
    case 48 :
    case 49 :
    case 51 :
    case 52 :
    case 53 :
    case 55 :
    case 56 :
    case 57 :
    case 59 :
    case 60 :
    case 61 :
    case 62 :
    case 63 :
    case 64 :
    case 65 :
    case 66 :
    case 67 :
    case 69 :
    case 70 :
    case 71 :
    case 72 :
    case 73 :
    case 74 :
    case 75 :
    case 76 :
    case 81 :
    case 82 :
    case 83 :
    case 84 :
    case 85 :
    case 86 :
    case 87 :
    case 88 :
    case 89 :
    case 90 :
    case 91 :
    case 93 :
    case 94 :
    case 95 :
    case 96 :
    case 97 :
    case 98 :
        return /* Other */[id];
    case 99 :
        return /* Einkommen */27;
    default:
      return /* Other */[id];
  }
}

function advantageToInt(id) {
  if (typeof id === "number") {
    switch (id) {
      case /* Aptitude */0 :
          return 4;
      case /* Nimble */1 :
          return 9;
      case /* Blessed */2 :
          return 12;
      case /* Luck */3 :
          return 14;
      case /* ExceptionalSkill */4 :
          return 16;
      case /* ExceptionalCombatTechnique */5 :
          return 17;
      case /* IncreasedAstralPower */6 :
          return 23;
      case /* IncreasedKarmaPoints */7 :
          return 24;
      case /* IncreasedLifePoints */8 :
          return 25;
      case /* IncreasedSpirit */9 :
          return 26;
      case /* IncreasedToughness */10 :
          return 27;
      case /* ImmunityToPoison */11 :
          return 28;
      case /* ImmunityToDisease */12 :
          return 29;
      case /* MagicalAttunement */13 :
          return 32;
      case /* Rich */14 :
          return 36;
      case /* SociallyAdaptable */15 :
          return 40;
      case /* InspireConfidence */16 :
          return 46;
      case /* WeaponAptitude */17 :
          return 47;
      case /* Spellcaster */18 :
          return 50;
      case /* Unyielding */19 :
          return 54;
      case /* LargeSpellSelection */20 :
          return 58;
      case /* HatredFor */21 :
          return 68;
      case /* Prediger */22 :
          return 77;
      case /* Visionaer */23 :
          return 78;
      case /* ZahlreichePredigten */24 :
          return 79;
      case /* ZahlreicheVisionen */25 :
          return 80;
      case /* LeichterGang */26 :
          return 92;
      case /* Einkommen */27 :
          return 99;
      
    }
  } else {
    return id[0];
  }
}

function disadvantageFromInt(id) {
  switch (id) {
    case 1 :
        return /* AfraidOf */0;
    case 2 :
        return /* Poor */1;
    case 4 :
        return /* Slow */2;
    case 17 :
        return /* NoFlyingBalm */3;
    case 18 :
        return /* NoFamiliar */4;
    case 24 :
        return /* MagicalRestriction */5;
    case 26 :
        return /* DecreasedArcanePower */6;
    case 27 :
        return /* DecreasedKarmaPoints */7;
    case 28 :
        return /* DecreasedLifePoints */8;
    case 29 :
        return /* DecreasedSpirit */9;
    case 30 :
        return /* DecreasedToughness */10;
    case 31 :
        return /* BadLuck */11;
    case 33 :
        return /* PersonalityFlaw */12;
    case 34 :
        return /* Principles */13;
    case 36 :
        return /* BadHabit */14;
    case 37 :
        return /* NegativeTrait */15;
    case 45 :
        return /* Stigma */16;
    case 47 :
        return /* Deaf */17;
    case 48 :
        return /* Incompetent */18;
    case 50 :
        return /* Obligations */19;
    case 51 :
        return /* Maimed */20;
    case 56 :
        return /* BrittleBones */21;
    case 59 :
        return /* SmallSpellSelection */22;
    case 3 :
    case 5 :
    case 6 :
    case 7 :
    case 8 :
    case 9 :
    case 10 :
    case 11 :
    case 12 :
    case 13 :
    case 14 :
    case 15 :
    case 16 :
    case 19 :
    case 20 :
    case 21 :
    case 22 :
    case 23 :
    case 25 :
    case 32 :
    case 35 :
    case 38 :
    case 39 :
    case 40 :
    case 41 :
    case 42 :
    case 43 :
    case 44 :
    case 46 :
    case 49 :
    case 52 :
    case 53 :
    case 54 :
    case 55 :
    case 57 :
    case 58 :
    case 60 :
    case 61 :
    case 62 :
    case 63 :
    case 64 :
    case 65 :
    case 66 :
    case 67 :
    case 68 :
    case 69 :
    case 70 :
    case 71 :
        return /* Other */[id];
    case 72 :
        return /* WenigePredigten */23;
    case 73 :
        return /* WenigeVisionen */24;
    default:
      return /* Other */[id];
  }
}

function disadvantageToInt(id) {
  if (typeof id === "number") {
    switch (id) {
      case /* AfraidOf */0 :
          return 1;
      case /* Poor */1 :
          return 2;
      case /* Slow */2 :
          return 4;
      case /* NoFlyingBalm */3 :
          return 17;
      case /* NoFamiliar */4 :
          return 18;
      case /* MagicalRestriction */5 :
          return 24;
      case /* DecreasedArcanePower */6 :
          return 26;
      case /* DecreasedKarmaPoints */7 :
          return 27;
      case /* DecreasedLifePoints */8 :
          return 28;
      case /* DecreasedSpirit */9 :
          return 29;
      case /* DecreasedToughness */10 :
          return 30;
      case /* BadLuck */11 :
          return 31;
      case /* PersonalityFlaw */12 :
          return 33;
      case /* Principles */13 :
          return 34;
      case /* BadHabit */14 :
          return 36;
      case /* NegativeTrait */15 :
          return 37;
      case /* Stigma */16 :
          return 45;
      case /* Deaf */17 :
          return 47;
      case /* Incompetent */18 :
          return 48;
      case /* Obligations */19 :
          return 50;
      case /* Maimed */20 :
          return 51;
      case /* BrittleBones */21 :
          return 56;
      case /* SmallSpellSelection */22 :
          return 59;
      case /* WenigePredigten */23 :
          return 72;
      case /* WenigeVisionen */24 :
          return 73;
      
    }
  } else {
    return id[0];
  }
}

function unsafeSkillFromInt(id) {
  var switcher = id - 1 | 0;
  if (switcher > 58 || switcher < 0) {
    return Pervasives.invalid_arg("fromInt: " + (Int$OptolithClient.show(id) + " is not a valid skill"));
  } else {
    return switcher;
  }
}

function skillToInt(id) {
  return id + 1 | 0;
}

function combatTechniqueFromInt(id) {
  switch (id) {
    case 1 :
        return /* Crossbows */0;
    case 2 :
        return /* Bows */1;
    case 3 :
        return /* Daggers */2;
    case 4 :
        return /* FencingWeapons */3;
    case 5 :
        return /* ImpactWeapons */4;
    case 6 :
        return /* ChainWeapons */5;
    case 7 :
        return /* Lances */6;
    case 8 :
        return /* Other */[id];
    case 9 :
        return /* Brawling */7;
    case 10 :
        return /* Shields */8;
    case 11 :
        return /* Slings */9;
    case 12 :
        return /* Swords */10;
    case 13 :
        return /* Polearms */11;
    case 14 :
        return /* ThrownWeapons */12;
    case 15 :
        return /* TwoHandedImpactWeapons */13;
    case 16 :
        return /* TwoHandedSwords */14;
    case 17 :
        return /* SpittingFire */15;
    case 18 :
        return /* Blowguns */16;
    case 19 :
        return /* Discuses */17;
    case 20 :
        return /* Faecher */18;
    case 21 :
        return /* Spiesswaffen */19;
    default:
      return /* Other */[id];
  }
}

function combatTechniqueToInt(id) {
  if (typeof id === "number") {
    switch (id) {
      case /* Crossbows */0 :
          return 1;
      case /* Bows */1 :
          return 2;
      case /* Daggers */2 :
          return 3;
      case /* FencingWeapons */3 :
          return 4;
      case /* ImpactWeapons */4 :
          return 5;
      case /* ChainWeapons */5 :
          return 6;
      case /* Lances */6 :
          return 7;
      case /* Brawling */7 :
          return 9;
      case /* Shields */8 :
          return 10;
      case /* Slings */9 :
          return 11;
      case /* Swords */10 :
          return 12;
      case /* Polearms */11 :
          return 13;
      case /* ThrownWeapons */12 :
          return 14;
      case /* TwoHandedImpactWeapons */13 :
          return 15;
      case /* TwoHandedSwords */14 :
          return 16;
      case /* SpittingFire */15 :
          return 17;
      case /* Blowguns */16 :
          return 18;
      case /* Discuses */17 :
          return 19;
      case /* Faecher */18 :
          return 20;
      case /* Spiesswaffen */19 :
          return 21;
      
    }
  } else {
    return id[0];
  }
}

function unsafeCombatTechniqueGroupFromInt(id) {
  if (id !== 1) {
    if (id !== 2) {
      return Pervasives.invalid_arg("unsafeCombatTechniqueGroupFromInt: " + (Int$OptolithClient.show(id) + " is not a valid combat technique group"));
    } else {
      return /* Ranged */1;
    }
  } else {
    return /* Melee */0;
  }
}

function combatTechniqueGroupToInt(id) {
  if (id) {
    return 2;
  } else {
    return 1;
  }
}

function specialAbilityFromInt(id) {
  if (id >= 623) {
    if (id >= 1069) {
      if (id < 1222) {
        if (id >= 1100) {
          var switcher = id - 1128 | 0;
          if (switcher > 92 || switcher < 0) {
            if (switcher >= 93) {
              return /* TraditionAnimisten */92;
            } else {
              switch (switcher + 28 | 0) {
                case 0 :
                    return /* Fachwissen */85;
                case 8 :
                    return /* Handwerkskunst */86;
                case 10 :
                    return /* KindDerNatur */87;
                case 12 :
                    return /* KoerperlichesGeschick */88;
                case 23 :
                    return /* SozialeKompetenz */89;
                case 1 :
                case 2 :
                case 3 :
                case 4 :
                case 5 :
                case 6 :
                case 7 :
                case 9 :
                case 11 :
                case 13 :
                case 14 :
                case 15 :
                case 16 :
                case 17 :
                case 18 :
                case 19 :
                case 20 :
                case 21 :
                case 22 :
                case 24 :
                case 25 :
                case 26 :
                    return /* Other */[id];
                case 27 :
                    return /* Universalgenie */90;
                
              }
            }
          } else if (switcher !== 19) {
            return /* Other */[id];
          } else {
            return /* ScholarDesMagierkollegsZuHoningen */91;
          }
        } else if (id !== 1075) {
          if (id >= 1070) {
            return /* Other */[id];
          } else {
            return /* WegDerKuenstlerin */83;
          }
        } else {
          return /* WegDerSchreiberin */84;
        }
      } else if (id >= 1294) {
        if (id !== 1391) {
          if (id !== 1438) {
            return /* Other */[id];
          } else {
            return /* TraditionBrobimGeoden */96;
          }
        } else {
          return /* Zaubervariabilitaet */95;
        }
      } else if (id !== 1255) {
        if (id >= 1293) {
          return /* TraditionZibilijas */94;
        } else {
          return /* Other */[id];
        }
      } else {
        return /* TraditionGeoden */93;
      }
    } else if (id < 809) {
      if (id >= 772) {
        var switcher$1 = id - 782 | 0;
        if (switcher$1 > 25 || switcher$1 < 0) {
          if (switcher$1 >= 26) {
            return /* ScholarDesKreisesDerEinfuehlung */78;
          } else {
            switch (switcher$1 + 10 | 0) {
              case 0 :
                  return /* GrosseMeditation */74;
              case 3 :
                  return /* Imitationszauberei */75;
              case 1 :
              case 2 :
              case 4 :
              case 5 :
              case 6 :
              case 7 :
              case 8 :
                  return /* Other */[id];
              case 9 :
                  return /* Kraftliniennutzung */76;
              
            }
          }
        } else if (switcher$1 !== 20) {
          return /* Other */[id];
        } else {
          return /* ScholarDerHalleDesLebensZuNorburg */77;
        }
      } else if (id >= 663) {
        if (id >= 751) {
          return /* Other */[id];
        } else {
          switch (id - 663 | 0) {
            case 0 :
                return /* ChantEnhancement */46;
            case 4 :
                return /* DunklesAbbildDerBuendnisgabe */47;
            case 13 :
                return /* TraditionIllusionist */48;
            case 14 :
                return /* TraditionArcaneBard */49;
            case 15 :
                return /* TraditionArcaneDancer */50;
            case 16 :
                return /* TraditionIntuitiveMage */51;
            case 17 :
                return /* TraditionSavant */52;
            case 18 :
                return /* TraditionQabalyaMage */53;
            case 19 :
                return /* TraditionChurchOfRondra */54;
            case 20 :
                return /* TraditionChurchOfBoron */55;
            case 21 :
                return /* TraditionChurchOfHesinde */56;
            case 22 :
                return /* TraditionChurchOfPhex */57;
            case 23 :
                return /* TraditionChurchOfPeraine */58;
            case 24 :
                return /* TraditionChurchOfEfferd */59;
            case 25 :
                return /* TraditionChurchOfTravia */60;
            case 26 :
                return /* TraditionChurchOfFirun */61;
            case 27 :
                return /* TraditionChurchOfTsa */62;
            case 28 :
                return /* TraditionChurchOfIngerimm */63;
            case 29 :
                return /* TraditionChurchOfRahja */64;
            case 30 :
                return /* TraditionCultOfTheNamelessOne */65;
            case 31 :
                return /* TraditionChurchOfAves */66;
            case 32 :
                return /* TraditionChurchOfIfirn */67;
            case 33 :
                return /* TraditionChurchOfKor */68;
            case 34 :
                return /* TraditionChurchOfNandus */69;
            case 35 :
                return /* TraditionChurchOfSwafnir */70;
            case 36 :
                return /* LanguageSpecializations */71;
            case 63 :
                return /* TraditionSchelme */72;
            case 1 :
            case 2 :
            case 3 :
            case 5 :
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
            case 11 :
            case 12 :
            case 37 :
            case 38 :
            case 39 :
            case 40 :
            case 41 :
            case 42 :
            case 43 :
            case 44 :
            case 45 :
            case 46 :
            case 47 :
            case 48 :
            case 49 :
            case 50 :
            case 51 :
            case 52 :
            case 53 :
            case 54 :
            case 55 :
            case 56 :
            case 57 :
            case 58 :
            case 59 :
            case 60 :
            case 61 :
            case 62 :
            case 64 :
            case 65 :
            case 66 :
            case 67 :
            case 68 :
            case 69 :
            case 70 :
            case 71 :
            case 72 :
            case 73 :
            case 74 :
            case 75 :
            case 76 :
            case 77 :
            case 78 :
            case 79 :
            case 80 :
            case 81 :
            case 82 :
            case 83 :
            case 84 :
            case 85 :
            case 86 :
                return /* Other */[id];
            case 87 :
                return /* TraditionZauberalchimisten */73;
            
          }
        }
      } else if (id >= 640) {
        return /* Other */[id];
      } else {
        switch (id - 623 | 0) {
          case 0 :
              return /* Zugvoegel */42;
          case 2 :
              return /* JaegerinnenDerWeissenMaid */43;
          case 9 :
              return /* AnhaengerDesGueldenen */44;
          case 1 :
          case 3 :
          case 4 :
          case 5 :
          case 6 :
          case 7 :
          case 8 :
          case 10 :
          case 11 :
          case 12 :
          case 13 :
          case 14 :
          case 15 :
              return /* Other */[id];
          case 16 :
              return /* GebieterDesAspekts */45;
          
        }
      }
    } else if (id >= 902) {
      if (id !== 1040) {
        if (id !== 1049) {
          return /* Other */[id];
        } else {
          return /* TraditionCultOfNuminoru */82;
        }
      } else {
        return /* WegDerGelehrten */81;
      }
    } else if (id !== 821) {
      if (id >= 901) {
        return /* GaretherGossenStil */80;
      } else {
        return /* Other */[id];
      }
    } else {
      return /* MadaschwesternStil */79;
    }
  } else if (id >= 255) {
    if (id >= 346) {
      if (id >= 472) {
        if (id >= 474) {
          switch (id) {
            case 531 :
                return /* Wissensdurst */28;
            case 533 :
                return /* Recherchegespuer */29;
            case 544 :
                return /* PredigtDerGemeinschaft */30;
            case 545 :
                return /* PredigtDerZuversicht */31;
            case 546 :
                return /* PredigtDesGottvertrauens */32;
            case 547 :
                return /* PredigtDesWohlgefallens */33;
            case 548 :
                return /* PredigtWiderMissgeschicke */34;
            case 549 :
                return /* VisionDerBestimmung */35;
            case 550 :
                return /* VisionDerEntrueckung */36;
            case 551 :
                return /* VisionDerGottheit */37;
            case 552 :
                return /* VisionDesSchicksals */38;
            case 553 :
                return /* VisionDesWahrenGlaubens */39;
            case 563 :
                return /* HoheWeihe */40;
            case 532 :
            case 534 :
            case 535 :
            case 536 :
            case 537 :
            case 538 :
            case 539 :
            case 540 :
            case 541 :
            case 542 :
            case 543 :
            case 554 :
            case 555 :
            case 556 :
            case 557 :
            case 558 :
            case 559 :
            case 560 :
            case 561 :
            case 562 :
            case 564 :
            case 565 :
            case 566 :
            case 567 :
            case 568 :
                return /* Other */[id];
            case 569 :
                return /* Lieblingsliturgie */41;
            default:
              return /* Other */[id];
          }
        } else if (id >= 473) {
          return /* Expertenwissen */27;
        } else {
          return /* Forschungsgebiet */26;
        }
      } else if (id !== 414) {
        if (id >= 347) {
          return /* Other */[id];
        } else {
          return /* TraditionDruids */24;
        }
      } else {
        return /* SpellEnhancement */25;
      }
    } else if (id >= 296) {
      var switcher$2 = id - 297 | 0;
      if (switcher$2 > 47 || switcher$2 < 0) {
        if (switcher$2 >= 48) {
          return /* TraditionElves */23;
        } else {
          return /* Harmoniezauberei */21;
        }
      } else if (switcher$2 !== 6) {
        return /* Other */[id];
      } else {
        return /* Matrixzauberei */22;
      }
    } else if (id !== 266) {
      if (id >= 256) {
        return /* Other */[id];
      } else {
        return /* TraditionWitches */19;
      }
    } else {
      return /* MagicStyleCombination */20;
    }
  } else if (id >= 110) {
    if (id >= 232) {
      if (id !== 240) {
        if (id !== 250) {
          return /* Other */[id];
        } else {
          return /* FavoriteSpellwork */18;
        }
      } else {
        return /* Exorzist */17;
      }
    } else if (id !== 164) {
      if (id >= 231) {
        return /* AdaptionZauber */16;
      } else {
        return /* Other */[id];
      }
    } else {
      return /* CombatStyleCombination */15;
    }
  } else if (id >= 52) {
    if (id >= 88) {
      if (id >= 109) {
        return /* Feuerschlucker */14;
      } else {
        return /* Other */[id];
      }
    } else if (id >= 64) {
      switch (id - 64 | 0) {
        case 0 :
            return /* ImprovedDodge */8;
        case 6 :
            return /* TraditionGuildMages */9;
        case 8 :
            return /* PropertyKnowledge */10;
        case 17 :
            return /* PropertyFocus */11;
        case 1 :
        case 2 :
        case 3 :
        case 4 :
        case 5 :
        case 7 :
        case 9 :
        case 10 :
        case 11 :
        case 12 :
        case 13 :
        case 14 :
        case 15 :
        case 16 :
        case 18 :
        case 19 :
        case 20 :
        case 21 :
            return /* Other */[id];
        case 22 :
            return /* TraditionChurchOfPraios */13;
        case 23 :
            return /* AspectKnowledge */12;
        
      }
    } else {
      return /* Other */[id];
    }
  } else if (id >= 30) {
    if (id >= 51) {
      return /* CombatReflexes */7;
    } else {
      return /* Other */[id];
    }
  } else if (id >= 9) {
    switch (id - 9 | 0) {
      case 0 :
          return /* SkillSpecialization */0;
      case 3 :
          return /* TerrainKnowledge */1;
      case 8 :
          return /* CraftInstruments */2;
      case 9 :
          return /* Hunter */3;
      case 13 :
          return /* AreaKnowledge */4;
      case 18 :
          return /* Literacy */5;
      case 1 :
      case 2 :
      case 4 :
      case 5 :
      case 6 :
      case 7 :
      case 10 :
      case 11 :
      case 12 :
      case 14 :
      case 15 :
      case 16 :
      case 17 :
      case 19 :
          return /* Other */[id];
      case 20 :
          return /* Language */6;
      
    }
  } else {
    return /* Other */[id];
  }
}

function specialAbilityToInt(id) {
  if (typeof id === "number") {
    switch (id) {
      case /* SkillSpecialization */0 :
          return 9;
      case /* TerrainKnowledge */1 :
          return 12;
      case /* CraftInstruments */2 :
          return 17;
      case /* Hunter */3 :
          return 18;
      case /* AreaKnowledge */4 :
          return 22;
      case /* Literacy */5 :
          return 27;
      case /* Language */6 :
          return 29;
      case /* CombatReflexes */7 :
          return 51;
      case /* ImprovedDodge */8 :
          return 64;
      case /* TraditionGuildMages */9 :
          return 70;
      case /* PropertyKnowledge */10 :
          return 72;
      case /* PropertyFocus */11 :
          return 81;
      case /* AspectKnowledge */12 :
          return 87;
      case /* TraditionChurchOfPraios */13 :
          return 86;
      case /* Feuerschlucker */14 :
          return 109;
      case /* CombatStyleCombination */15 :
          return 164;
      case /* AdaptionZauber */16 :
          return 231;
      case /* Exorzist */17 :
          return 240;
      case /* FavoriteSpellwork */18 :
          return 250;
      case /* TraditionWitches */19 :
          return 255;
      case /* MagicStyleCombination */20 :
          return 266;
      case /* Harmoniezauberei */21 :
          return 296;
      case /* Matrixzauberei */22 :
          return 303;
      case /* TraditionElves */23 :
          return 345;
      case /* TraditionDruids */24 :
          return 346;
      case /* SpellEnhancement */25 :
          return 414;
      case /* Forschungsgebiet */26 :
          return 472;
      case /* Expertenwissen */27 :
          return 473;
      case /* Wissensdurst */28 :
          return 531;
      case /* Recherchegespuer */29 :
          return 533;
      case /* PredigtDerGemeinschaft */30 :
          return 544;
      case /* PredigtDerZuversicht */31 :
          return 545;
      case /* PredigtDesGottvertrauens */32 :
          return 546;
      case /* PredigtDesWohlgefallens */33 :
          return 547;
      case /* PredigtWiderMissgeschicke */34 :
          return 548;
      case /* VisionDerBestimmung */35 :
          return 549;
      case /* VisionDerEntrueckung */36 :
          return 550;
      case /* VisionDerGottheit */37 :
          return 551;
      case /* VisionDesSchicksals */38 :
          return 552;
      case /* VisionDesWahrenGlaubens */39 :
          return 553;
      case /* HoheWeihe */40 :
          return 563;
      case /* Lieblingsliturgie */41 :
          return 569;
      case /* Zugvoegel */42 :
          return 623;
      case /* JaegerinnenDerWeissenMaid */43 :
          return 625;
      case /* AnhaengerDesGueldenen */44 :
          return 632;
      case /* GebieterDesAspekts */45 :
          return 639;
      case /* ChantEnhancement */46 :
          return 663;
      case /* DunklesAbbildDerBuendnisgabe */47 :
          return 667;
      case /* TraditionIllusionist */48 :
          return 676;
      case /* TraditionArcaneBard */49 :
          return 677;
      case /* TraditionArcaneDancer */50 :
          return 678;
      case /* TraditionIntuitiveMage */51 :
          return 679;
      case /* TraditionSavant */52 :
          return 680;
      case /* TraditionQabalyaMage */53 :
          return 681;
      case /* TraditionChurchOfRondra */54 :
          return 682;
      case /* TraditionChurchOfBoron */55 :
          return 683;
      case /* TraditionChurchOfHesinde */56 :
          return 684;
      case /* TraditionChurchOfPhex */57 :
          return 685;
      case /* TraditionChurchOfPeraine */58 :
          return 686;
      case /* TraditionChurchOfEfferd */59 :
          return 687;
      case /* TraditionChurchOfTravia */60 :
          return 688;
      case /* TraditionChurchOfFirun */61 :
          return 689;
      case /* TraditionChurchOfTsa */62 :
          return 690;
      case /* TraditionChurchOfIngerimm */63 :
          return 691;
      case /* TraditionChurchOfRahja */64 :
          return 692;
      case /* TraditionCultOfTheNamelessOne */65 :
          return 693;
      case /* TraditionChurchOfAves */66 :
          return 694;
      case /* TraditionChurchOfIfirn */67 :
          return 695;
      case /* TraditionChurchOfKor */68 :
          return 696;
      case /* TraditionChurchOfNandus */69 :
          return 697;
      case /* TraditionChurchOfSwafnir */70 :
          return 698;
      case /* LanguageSpecializations */71 :
          return 699;
      case /* TraditionSchelme */72 :
          return 726;
      case /* TraditionZauberalchimisten */73 :
          return 750;
      case /* GrosseMeditation */74 :
          return 772;
      case /* Imitationszauberei */75 :
          return 775;
      case /* Kraftliniennutzung */76 :
          return 781;
      case /* ScholarDerHalleDesLebensZuNorburg */77 :
          return 802;
      case /* ScholarDesKreisesDerEinfuehlung */78 :
          return 808;
      case /* MadaschwesternStil */79 :
          return 821;
      case /* GaretherGossenStil */80 :
          return 901;
      case /* WegDerGelehrten */81 :
          return 1040;
      case /* TraditionCultOfNuminoru */82 :
          return 1049;
      case /* WegDerKuenstlerin */83 :
          return 1069;
      case /* WegDerSchreiberin */84 :
          return 1075;
      case /* Fachwissen */85 :
          return 1100;
      case /* Handwerkskunst */86 :
          return 1108;
      case /* KindDerNatur */87 :
          return 1110;
      case /* KoerperlichesGeschick */88 :
          return 1112;
      case /* SozialeKompetenz */89 :
          return 1123;
      case /* Universalgenie */90 :
          return 1127;
      case /* ScholarDesMagierkollegsZuHoningen */91 :
          return 1147;
      case /* TraditionAnimisten */92 :
          return 1221;
      case /* TraditionGeoden */93 :
          return 1255;
      case /* TraditionZibilijas */94 :
          return 1293;
      case /* Zaubervariabilitaet */95 :
          return 1391;
      case /* TraditionBrobimGeoden */96 :
          return 1438;
      
    }
  } else {
    return id[0];
  }
}

exports.unsafePhaseFromInt = unsafePhaseFromInt;
exports.phaseToInt = phaseToInt;
exports.unsafeExperienceLevelFromInt = unsafeExperienceLevelFromInt;
exports.experienceLevelToInt = experienceLevelToInt;
exports.unsafeAttributeFromInt = unsafeAttributeFromInt;
exports.attributeToInt = attributeToInt;
exports.unsafeDerivedCharacteristicFromString = unsafeDerivedCharacteristicFromString;
exports.derivedCharacteristicToString = derivedCharacteristicToString;
exports.advantageFromInt = advantageFromInt;
exports.advantageToInt = advantageToInt;
exports.disadvantageFromInt = disadvantageFromInt;
exports.disadvantageToInt = disadvantageToInt;
exports.unsafeSkillFromInt = unsafeSkillFromInt;
exports.skillToInt = skillToInt;
exports.combatTechniqueFromInt = combatTechniqueFromInt;
exports.combatTechniqueToInt = combatTechniqueToInt;
exports.unsafeCombatTechniqueGroupFromInt = unsafeCombatTechniqueGroupFromInt;
exports.combatTechniqueGroupToInt = combatTechniqueGroupToInt;
exports.specialAbilityFromInt = specialAbilityFromInt;
exports.specialAbilityToInt = specialAbilityToInt;
/* No side effect */
