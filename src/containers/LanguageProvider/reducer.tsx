import { Reducer } from 'redux';
import { MssAction } from 'src/types/custom';
import { DEFAULT_LOCALE } from 'src/config';
import { CHANGE_LOCALE } from './constants';


export interface LanguageProviderState {
    readonly locale: string;
}

export const initialLanguageProviderState: LanguageProviderState = {
    locale: DEFAULT_LOCALE
};

const reducer: Reducer<LanguageProviderState, MssAction> =
    (state = initialLanguageProviderState, action): LanguageProviderState => {
        switch (action.type) {
            case CHANGE_LOCALE:
                const locale: string = action.payload;
                return { ...state, locale };
            default: {
                return state;
            }
        }
    }

export default reducer;