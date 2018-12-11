import { takeLatest, put } from 'redux-saga/effects';
import Api from 'src/shared/Api';
import { GET_BASE_DATA } from './constants';
import { getBaseDataSuccess, getBaseDataError, GetBaseDataAction } from './actions';


function* getBaseDataSaga(action: GetBaseDataAction) {
    try {
        const api: Api = action.payload.api;
        const res = yield api.getBaseData();
        yield put(getBaseDataSuccess(res));
    } catch (err) {
        yield put(getBaseDataError(err));
    }
}

export default function* appSaga() {
    yield takeLatest(GET_BASE_DATA, getBaseDataSaga);
}