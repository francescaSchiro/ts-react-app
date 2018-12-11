import { Reducer } from 'redux';
import { MssAction } from 'src/types/custom';

export interface UserState {
    readonly token: string;
}

const initialUserState: UserState = {
    token: ''
};

const reducer: Reducer<UserState, MssAction> =
    (state = initialUserState, action): UserState => {
        switch (action.type) {
            default: {
                return state;
            }
        }
    }

export default reducer;