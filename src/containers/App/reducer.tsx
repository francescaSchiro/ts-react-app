import { Reducer } from 'redux';
import { MssAction } from 'src/types/custom';
import { SWITCH_THEME } from './constants';


export interface AppState {
    readonly themeName: string;
}

const initialAppState: AppState = {
    themeName: 'DefaultTheme'
};

const reducer: Reducer<AppState, MssAction> =
    (state = initialAppState, action): AppState => {
        switch (action.type) {
            case SWITCH_THEME: {
                const { themeName } = action.payload;
                return { ...state, themeName }
            }
            default: {
                return state;
            }
        }
    }

export default reducer;