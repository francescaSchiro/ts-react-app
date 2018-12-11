import { all, fork, AllEffect } from 'redux-saga/effects';
import appSaga from 'src/containers/App/saga';

export default function* rootSaga(): IterableIterator<AllEffect> {
    yield all([
        fork(appSaga)
    ]);
}