import { persistStore, Persistor, PersistedState } from 'redux-persist';
import { createStore, Store, StoreEnhancer } from 'redux';
import { Reducer } from 'react';
import { History } from 'history';

import getMiddlewares, { sagaMiddleware } from 'src/core/middlewares';
import getRootReducer, { RootReducerAction } from 'src/core/reducers';
import rootSaga from 'src/core/saga';


export default function configure(
    history: History
): { store: Store, persistor: Persistor } {

    const middlewares: StoreEnhancer = getMiddlewares(history);
    const rootReducer: Reducer<PersistedState, RootReducerAction> = getRootReducer(history);
    const store: Store = createStore(rootReducer, middlewares);
    const persistor: Persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);
    return { store, persistor };
}