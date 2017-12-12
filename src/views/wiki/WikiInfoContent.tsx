import * as React from 'react';
import { Aside } from '../../components/Aside';
import * as Categories from '../../constants/Categories';
import { DependentInstancesState } from '../../reducers/dependentInstances';
import { ActivatableInstance, AttributeInstance, BlessingInstance, Book, CantripInstance, CombatTechniqueInstance, ItemInstance, LiturgyInstance, RaceInstance, SecondaryAttribute, SpecialAbilityInstance, SpellInstance, TalentInstance } from '../../types/data.d';
import { Culture, Profession, Race, UIMessages } from '../../types/view.d';
import { WikiActivatableInfo } from './WikiActivatableInfo';
import { WikiBlessingInfo } from './WikiBlessingInfo';
import { WikiCantripInfo } from './WikiCantripInfo';
import { WikiCombatTechniqueInfo } from './WikiCombatTechniqueInfo';
import { WikiCultureInfo } from './WikiCultureInfo';
import { WikiEquipmentInfo } from './WikiEquipmentInfo';
import { WikiInfoEmpty } from './WikiInfoEmpty';
import { WikiLiturgicalChantInfo } from './WikiLiturgicalChantInfo';
import { WikiProfessionInfo } from './WikiProfessionInfo';
import { WikiRaceInfo } from './WikiRaceInfo';
import { WikiSkillInfo } from './WikiSkillInfo';
import { WikiSpellInfo } from './WikiSpellInfo';

type Instance = BlessingInstance | CantripInstance | CombatTechniqueInstance | LiturgyInstance | SpellInstance | Culture | Profession | Race | ActivatableInstance | TalentInstance | ItemInstance;

export interface WikiInfoContentOwnProps {
	currentId?: string;
	locale: UIMessages;
	noWrapper?: boolean;
}

export interface WikiInfoContentStateProps {
	attributes: Map<string, AttributeInstance>;
	books: Map<string, Book>;
	cantrips: Map<string, CantripInstance>;
	combatTechniques: Map<string, CombatTechniqueInstance>;
	derivedCharacteristics: Map<string, SecondaryAttribute>;
	dependent: DependentInstancesState;
	languages: SpecialAbilityInstance;
	liturgicalChantExtensions: SpecialAbilityInstance | undefined;
	liturgicalChants: Map<string, LiturgyInstance>;
	list: Instance[];
	races: Map<string, RaceInstance>;
	scripts: SpecialAbilityInstance;
	sex: 'm' | 'f' | undefined;
	skills: Map<string, TalentInstance>;
	spellExtensions: SpecialAbilityInstance | undefined;
	spells: Map<string, SpellInstance>;
	specialAbilities: Map<string, SpecialAbilityInstance>;
	templates: Map<string, ItemInstance>;
}

export interface WikiInfoContentDispatchProps {}

export type WikiInfoContentProps = WikiInfoContentStateProps & WikiInfoContentDispatchProps & WikiInfoContentOwnProps;

export function WikiInfoContent(props: WikiInfoContentProps) {
	const { currentId, list, noWrapper } = props;

	const currentObject = currentId && list.find(e => currentId === e.id);

	let currentElement: JSX.Element | null | undefined;

	if (typeof currentObject === 'object') {
		if (isItemInstance(currentObject)) {
			currentElement = <WikiEquipmentInfo {...props} currentObject={currentObject} />;
		}
		else {
			switch (currentObject.category) {
				case Categories.ADVANTAGES:
				case Categories.DISADVANTAGES:
				case Categories.SPECIAL_ABILITIES:
					currentElement = <WikiActivatableInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.BLESSINGS:
					currentElement = <WikiBlessingInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.CANTRIPS:
					currentElement = <WikiCantripInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.COMBAT_TECHNIQUES:
					currentElement = <WikiCombatTechniqueInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.CULTURES:
					currentElement = <WikiCultureInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.LITURGIES:
					currentElement = <WikiLiturgicalChantInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.PROFESSIONS:
					currentElement = <WikiProfessionInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.RACES:
					currentElement = <WikiRaceInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.SPELLS:
					currentElement = <WikiSpellInfo {...props} currentObject={currentObject} />;
					break;
				case Categories.TALENTS:
					currentElement = <WikiSkillInfo {...props} currentObject={currentObject} />;
					break;
			}
		}
	}

	return noWrapper ? (currentElement || <WikiInfoEmpty />) : (
		<Aside>
			{currentElement || <WikiInfoEmpty />}
		</Aside>
	);
}

function isItemInstance(obj: Instance): obj is ItemInstance {
	return obj.hasOwnProperty('id') && obj.hasOwnProperty('name') && obj.hasOwnProperty('isTemplateLocked');
}