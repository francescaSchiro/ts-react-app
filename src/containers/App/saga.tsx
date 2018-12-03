import { takeLatest } from 'redux-saga/effects';
import { YOUR_ACTION_CONSTANT } from './constants';

function* test() {
    yield 'test';
}

export default function* appSaga() {
    yield takeLatest(YOUR_ACTION_CONSTANT, test);
}