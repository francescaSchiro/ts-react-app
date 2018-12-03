// import { 
//     SET_MESSAGE,
//     RESET_MESSAGE,
//     REQUEST_MESSAGES_SUCCESS,
//     REQUEST_MESSAGES_FAIL,
//   } from './constants';
import { Reducer } from 'redux';
import { MssAction } from 'src/types/custom';


export interface AppState {
    languageName: string;
    enthusiasmLevel: number;
}

const initialAppState: AppState = {
    languageName: '',
    enthusiasmLevel: 0,
};

const reducer: Reducer<AppState, MssAction> =
    (state: AppState = initialAppState, action: MssAction): AppState => {
        switch (action.type) {
            default: {
                return state;
            }
        }
    }

export default reducer;