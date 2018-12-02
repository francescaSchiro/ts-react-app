import { persistStore, Persistor, PersistedState } from 'redux-persist';
import { connectRouter, RouterAction } from 'connected-react-router';
import { History } from 'history';

import getMiddlewares, { sagaMiddleware } from 'src/core/middlewares';
import getRootReducer from 'src/core/reducers';

// import appSaga from 'src/containers/App/saga';
import { StoreState } from '../types/states';
import { MssAction } from '../types/custom';
import { createStore, Store, StoreEnhancer } from 'redux';
import { Reducer } from 'react';


export default function configure(
    initialState: StoreState,
    history: History
): { store: Store, persistor: Persistor } {
    
    const middlewares: StoreEnhancer = getMiddlewares(history);
    const rootReducer: Reducer<PersistedState, RouterAction | MssAction> = getRootReducer();
    const store: Store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        middlewares
    );
    const persistor: Persistor = persistStore(store);

    // sagaMiddleware.run(appSaga);

    return { store, persistor };
}