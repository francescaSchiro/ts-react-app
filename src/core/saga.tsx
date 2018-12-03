import { fork, ForkEffect } from 'redux-saga/effects';
import appSaga from 'src/containers/App/saga';

export default function* rootSaga(): IterableIterator<ForkEffect[]> {
    yield [
        fork(appSaga)
    ];
}