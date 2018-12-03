import { ActionCreator } from 'redux';
import { MssAction } from 'src/types/custom';
import { YOUR_ACTION_CONSTANT } from './constants';


interface UsersListUpdatedAction extends MssAction {
    type: YOUR_ACTION_CONSTANT;
    payload: {
        users: string[];
    };
}

export const updateUsersList: ActionCreator<UsersListUpdatedAction> = (users: string[]) => ({
    type: YOUR_ACTION_CONSTANT,
    payload: {
        users
    }
});