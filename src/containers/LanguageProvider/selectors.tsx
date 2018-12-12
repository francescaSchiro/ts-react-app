import { createSelector } from 'reselect';
// import { ReducersMapObject } from 'redux';
import { LanguageProviderState } from './reducer';


const selectLanguage = (state: any): LanguageProviderState => state.language; // TODO

const makeSelectLocale = () =>
    createSelector(selectLanguage, (languageState: LanguageProviderState) => languageState.locale);

export {
    makeSelectLocale
};
