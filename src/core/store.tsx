import { persistStore, Persistor } from 'redux-persist';
import { connectRouter } from 'connected-react-router';

import getMiddlewares, { sagaMiddleware } from 'app/core/middlewares';
import getRootReducer from 'app/core/reducers';

import appSaga from 'app/containers/App/saga';
import { StoreState } from 'src/types';
import { createStore, Store } from 'redux';


export default function configure(initialState: StoreState, history: any): { store: Store, persistor: Persistor } {
    const middlewares = getMiddlewares(history);
    const rootReducer = getRootReducer();
    const store: Store = createStore(
        connectRouter(history)(rootReducer),
        initialState,
        middlewares
    );
    const persistor: Persistor = persistStore(store);

    sagaMiddleware.run(appSaga);

    return { store, persistor };
}