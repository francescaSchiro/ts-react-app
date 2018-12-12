import { createSelector } from 'reselect';
import { AppState } from './reducer';


const selectApp = (state: any): AppState => state.app; // TODO

const makeSelectThemeName = () =>
    createSelector(selectApp, (appState: AppState): string => appState.themeName);

export {
    makeSelectThemeName
};
