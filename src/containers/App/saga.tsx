import { AllEffect, takeLatest } from 'redux-saga/effects';

function* test() {
    yield 'test';
}

export default function* appSaga() {
    yield takeLatest('', test);
}