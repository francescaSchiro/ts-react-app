import { ActionCreator } from 'redux';
import { MssAction } from 'src/types/custom';
import { CHANGE_LOCALE } from './constants';

export interface ChangeLocaleAction extends MssAction {
    type: CHANGE_LOCALE,
    payload: {
        locale: string
    }
}

export const changeLocale: ActionCreator<ChangeLocaleAction> = (languageLocale: string) => ({
    type: CHANGE_LOCALE,
    payload: {
        locale: languageLocale
    }
});