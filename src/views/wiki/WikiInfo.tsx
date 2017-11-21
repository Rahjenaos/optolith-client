import * as React from 'react';
import { Aside } from '../../components/Aside';
import { AttributeInstance, BlessingInstance, Book, CantripInstance, LiturgyInstance, SecondaryAttribute, SpecialAbilityInstance, SpellInstance, TalentInstance } from '../../types/data.d';
import { Culture, Profession, Race, UIMessages } from '../../types/view.d';
import { WikiActivatableInfo } from './WikiActivatableInfo';
import { WikiBlessingInfo } from './WikiBlessingInfo';
import { WikiCantripInfo } from './WikiCantripInfo';
import { WikiCultureInfo } from './WikiCultureInfo';
import { WikiInfoEmpty } from './WikiInfoEmpty';
import { WikiLiturgicalChantInfo } from './WikiLiturgicalChantInfo';
import { WikiProfessionInfo } from './WikiProfessionInfo';
import { WikiRaceInfo } from './WikiRaceInfo';
import { WikiSkillInfo } from './WikiSkillInfo';
import { WikiSpellInfo } from './WikiSpellInfo';

type Instance = BlessingInstance | CantripInstance | LiturgyInstance | SpellInstance | Culture | Profession | Race | SpecialAbilityInstance | TalentInstance;

export interface WikiInfoOwnProps {
	currentId?: string;
	list: Instance[];
	locale: UIMessages;
	noWrapper?: boolean;
}

export interface WikiInfoStateProps {
	attributes: Map<string, AttributeInstance>;
	books: Map<string, Book>;
	cantrips: Map<string, CantripInstance>;
	derivedCharacteristics: Map<string, SecondaryAttribute>;
	languages: SpecialAbilityInstance;
	liturgicalChantExtensions: SpecialAbilityInstance | undefined;
	liturgicalChants: Map<string, LiturgyInstance>;
	scripts: SpecialAbilityInstance;
	sex: 'm' | 'f' | undefined;
	skills: Map<string, TalentInstance>;
	spellExtensions: SpecialAbilityInstance | undefined;
	spells: Map<string, SpellInstance>;
	specialAbilities: Map<string, SpecialAbilityInstance>;
}

export interface WikiInfoDispatchProps {}

export type WikiInfoProps = WikiInfoStateProps & WikiInfoDispatchProps & WikiInfoOwnProps;

export function WikiInfo(props: WikiInfoProps) {
	const { currentId, list, noWrapper } = props;

	const currentObject = currentId && list.find(e => currentId === e.id);

	let currentElement: JSX.Element | null | undefined;

	if (typeof currentObject === 'object') {
		switch (currentObject.category) {
			case 'SPECIAL_ABILITIES':
				currentElement = <WikiActivatableInfo {...props} currentObject={currentObject} />;
				break;
			case 'BLESSINGS':
				currentElement = <WikiBlessingInfo {...props} currentObject={currentObject} />;
				break;
			case 'CANTRIPS':
				currentElement = <WikiCantripInfo {...props} currentObject={currentObject} />;
				break;
			case 'CULTURES':
				currentElement = <WikiCultureInfo {...props} currentObject={currentObject} />;
				break;
			case 'LITURGIES':
				currentElement = <WikiLiturgicalChantInfo {...props} currentObject={currentObject} />;
				break;
			case 'PROFESSIONS':
				currentElement = <WikiProfessionInfo {...props} currentObject={currentObject} />;
				break;
			case 'RACES':
				currentElement = <WikiRaceInfo {...props} currentObject={currentObject} />;
				break;
			case 'SPELLS':
				currentElement = <WikiSpellInfo {...props} currentObject={currentObject} />;
				break;
			case 'TALENTS':
				currentElement = <WikiSkillInfo {...props} currentObject={currentObject} />;
				break;
		}
	}

	return noWrapper ? (currentElement || <WikiInfoEmpty />) : (
		<Aside>
			{currentElement || <WikiInfoEmpty />}
		</Aside>
	);
}
