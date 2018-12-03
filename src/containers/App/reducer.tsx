import { Reducer } from 'redux';
import { MssAction } from 'src/types/custom';


export interface AppState {
    readonly languageName: string;
    readonly enthusiasmLevel: number;
}

const initialAppState: AppState = {
    languageName: '',
    enthusiasmLevel: 0,
};

const reducer: Reducer<AppState, MssAction> =
    (state = initialAppState, action): AppState => {
        switch (action.type) {
            default: {
                return state;
            }
        }
    }

export default reducer;