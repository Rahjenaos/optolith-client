import { connect } from 'react-redux';
import { AppState } from '../reducers/appReducer';
import { getDerivedCharacteristicsMap } from '../selectors/derivedCharacteristicsSelectors';
import * as stateSelectors from '../selectors/stateSelectors';
import { getAllWikiEntries } from '../selectors/wikiSelectors';
import { mapGetToSlice } from '../utils/SelectorsUtils';
import { WikiInfo, WikiInfoDispatchProps, WikiInfoOwnProps } from '../views/wiki/WikiInfo';
import { WikiInfoContentStateProps } from '../views/wiki/WikiInfoContent';

const mapStateToProps =
  (state: AppState, ownProps: WikiInfoOwnProps): WikiInfoContentStateProps => ({
    attributes: stateSelectors.getWikiAttributes (state),
    advantages: stateSelectors.getWikiAdvantages (state),
    blessings: stateSelectors.getWikiBlessings (state),
    books: stateSelectors.getWikiBooks (state),
    cantrips: stateSelectors.getWikiCantrips (state),
    combatTechniques: stateSelectors.getWikiCombatTechniques (state),
    cultures: stateSelectors.getWikiCultures (state),
    derivedCharacteristics: getDerivedCharacteristicsMap (state, ownProps),
    languages: mapGetToSlice (stateSelectors.getWikiSpecialAbilities) (state) ('SA_29'),
    list: getAllWikiEntries (state),
    professionVariants: stateSelectors.getWikiProfessionVariants (state),
    raceVariants: stateSelectors.getWikiRaceVariants (state),
    races: stateSelectors.getWikiRaces (state),
    liturgicalChantExtensions:
      mapGetToSlice (stateSelectors.getWikiSpecialAbilities) (state) ('SA_663'),
    liturgicalChants: stateSelectors.getWikiLiturgicalChants (state),
    scripts: mapGetToSlice (stateSelectors.getWikiSpecialAbilities) (state) ('SA_27'),
    sex: stateSelectors.getSex (state),
    skills: stateSelectors.getWikiSkills (state),
    spellExtensions: mapGetToSlice (stateSelectors.getWikiSpecialAbilities) (state) ('SA_414'),
    spells: stateSelectors.getWikiSpells (state),
    specialAbilities: stateSelectors.getWikiSpecialAbilities (state),
    templates: stateSelectors.getWikiItemTemplates (state),
    wiki: stateSelectors.getWiki (state),
  });

export const connectWikiInfo =
  connect<WikiInfoContentStateProps, WikiInfoDispatchProps, WikiInfoOwnProps, AppState> (
    mapStateToProps
  );

export const WikiInfoContainer = connectWikiInfo (WikiInfo);
