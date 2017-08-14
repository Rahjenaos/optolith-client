import * as React from 'react';
import { Aside } from '../../components/Aside';
import { BorderButton } from '../../components/BorderButton';
import { List } from '../../components/List';
import { Options } from '../../components/Options';
import { Page } from '../../components/Page';
import { Scroll } from '../../components/Scroll';
import { TextField } from '../../components/TextField';
import { Purse } from '../../reducers/equipment';
import { ArmorZonesInstance, InputTextEvent, ItemInstance, UIMessages } from '../../types/data.d';
import { createOverlay } from '../../utils/createOverlay';
import { filterAndSortObjects } from '../../utils/FilterSortUtils';
import { _localizeNumber, _localizeWeight, _translate } from '../../utils/I18n';
import { ArmorZonesEditor } from './ArmorZonesEditor';
import { ArmorZonesListItem } from './ArmorZonesListItem';

export interface ArmorZonesOwnProps {
	locale: UIMessages;
}

export interface ArmorZonesStateProps {
	armorZones: ArmorZonesInstance[];
	carryingCapacity: number;
	initialStartingWealth: number;
	items: ItemInstance[];
	hasNoAddedAP: boolean;
	purse: Purse;
	templates: ItemInstance[];
	totalPrice: number;
	totalWeight: number;
}

export interface ArmorZonesDispatchProps {
	addToList(item: ItemInstance): void;
	deleteItem(id: string): void;
	set(id: string, item: ItemInstance): void;
	setDucates(value: string): void;
	setSilverthalers(value: string): void;
	setHellers(value: string): void;
	setKreutzers(value: string): void;
}

export type ArmorZonesProps = ArmorZonesStateProps & ArmorZonesDispatchProps & ArmorZonesOwnProps;

export interface ArmorZonesState {
	filterText: string;
}

export class ArmorZones extends React.Component<ArmorZonesProps, ArmorZonesState> {
	state = {
		filterText: ''
	};

	filter = (event: InputTextEvent) => this.setState({ filterText: event.target.value } as ArmorZonesState);
	setDucates = (event: InputTextEvent) => this.props.setDucates(event.target.value as string);
	setSilverthalers = (event: InputTextEvent) => this.props.setSilverthalers(event.target.value as string);
	setHellers = (event: InputTextEvent) => this.props.setHellers(event.target.value as string);
	setKreutzers = (event: InputTextEvent) => this.props.setKreutzers(event.target.value as string);

	showArmorZonesCreation = () => {
		createOverlay(
			<ArmorZonesEditor
				{...this.props}
				create
				/>
		);
	}

	render() {
		const { carryingCapacity, initialStartingWealth, armorZones, hasNoAddedAP, locale, purse, totalPrice, totalWeight } = this.props;
		const { filterText } = this.state;

		const list = filterAndSortObjects(armorZones, locale.id, filterText);

		return (
			<Page id="armor-zones">
				<Options>
					<TextField hint={_translate(locale, 'options.filtertext')} value={filterText} onChange={this.filter} fullWidth />
					<BorderButton label={_translate(locale, 'zonearmor.actions.create')} onClick={this.showArmorZonesCreation} />
				</Options>
				<Scroll>
					<List>
						{
							list.map(obj => <ArmorZonesListItem {...this.props} key={obj.id} data={obj} />)
						}
					</List>
				</Scroll>
				<Aside>
					<div className="purse">
						<h4>{_translate(locale, 'equipment.view.purse')}</h4>
						<div className="fields">
							<TextField label={_translate(locale, 'equipment.view.ducates')} value={purse.d} onChange={this.setDucates} />
							<TextField label={_translate(locale, 'equipment.view.silverthalers')} value={purse.s} onChange={this.setSilverthalers} />
							<TextField label={_translate(locale, 'equipment.view.hellers')} value={purse.h} onChange={this.setHellers} />
							<TextField label={_translate(locale, 'equipment.view.kreutzers')} value={purse.k} onChange={this.setKreutzers} />
						</div>
					</div>
					<div className="total-points">
						<h4>{hasNoAddedAP && `${_translate(locale, 'equipment.view.initialstartingwealth')} & `}{_translate(locale, 'equipment.view.carringandliftingcapactity')}</h4>
						<div className="fields">
							{hasNoAddedAP && <div>{_localizeNumber(totalPrice, locale.id)} / {_localizeNumber(initialStartingWealth, locale.id)} {_translate(locale, 'equipment.view.price')}</div>}
							<div>{_localizeNumber(_localizeWeight(totalWeight, locale.id), locale.id)} / {_localizeNumber(_localizeWeight(carryingCapacity, locale.id), locale.id)} {_translate(locale, 'equipment.view.weight')}</div>
						</div>
					</div>
				</Aside>
			</Page>
		);
	}
}