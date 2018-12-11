import { ActionCreator } from 'redux';
import { MssAction } from 'src/types/custom';
import { GET_BASE_DATA, GET_BASE_DATA_ERROR, GET_BASE_DATA_SUCCESS } from './constants';


export interface GetBaseDataAction extends MssAction {
    type: GET_BASE_DATA,
    payload: {}
}

interface GetBaseDataSuccessAction extends MssAction {
    type: GET_BASE_DATA_SUCCESS
}

interface GetBaseDataErrorAction extends MssAction {
    type: GET_BASE_DATA_ERROR
}

export const getBaseData: ActionCreator<GetBaseDataAction> = () => ({
    type: GET_BASE_DATA,
    payload: {},
});

export const getBaseDataSuccess: ActionCreator<GetBaseDataSuccessAction> = (res) => ({
    type: GET_BASE_DATA_SUCCESS,
    payload: {},
});

export const getBaseDataError: ActionCreator<GetBaseDataErrorAction> = (err) => ({
    type: GET_BASE_DATA_ERROR,
    payload: {},
});