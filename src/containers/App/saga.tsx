import { takeLatest, put } from 'redux-saga/effects';
import { getBaseData } from 'src/shared/api';
import { GET_BASE_DATA } from './constants';
import { getBaseDataSuccess, getBaseDataError, GetBaseDataAction } from './actions';


function* getBaseDataSaga(action: GetBaseDataAction) {
    try {
        const res = yield getBaseData();
        yield put(getBaseDataSuccess(res));
    } catch (err) {
        yield put(getBaseDataError(err));
    }
}

export default function* appSaga() {
    yield takeLatest(GET_BASE_DATA, getBaseDataSaga);
}