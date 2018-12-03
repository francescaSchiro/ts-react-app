import { persistStore, Persistor, PersistedState } from 'redux-persist';
import { RouterAction } from 'connected-react-router';
import { createStore, Store, StoreEnhancer } from 'redux';
import { Reducer } from 'react';
import { History } from 'history';

import getMiddlewares, { sagaMiddleware } from 'src/core/middlewares';
import getRootReducer from 'src/core/reducers';
import rootSaga from 'src/core/saga';

import { MssAction } from 'src/types/custom';


export default function configure(
    history: History
): { store: Store, persistor: Persistor } {

    const middlewares: StoreEnhancer = getMiddlewares(history);
    const rootReducer: Reducer<PersistedState, RouterAction | MssAction> = getRootReducer(history);
    const store: Store = createStore(rootReducer, middlewares);
    const persistor: Persistor = persistStore(store);

    sagaMiddleware.run(rootSaga);
    return { store, persistor };
}