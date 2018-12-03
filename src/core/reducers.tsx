import { persistCombineReducers, PersistedState, PersistConfig } from 'redux-persist';
import { RouterAction, connectRouter } from 'connected-react-router';
import { History } from 'history';
import { Reducer, ReducersMapObject } from 'redux';

import { config } from 'src/core/persist';
import { MssAction } from 'src/types/custom';
import appReducer from 'src/containers/App/reducer';

export default function getRootReducer(history: History): Reducer<PersistedState, RouterAction | MssAction> {
  const reducersMapObject: ReducersMapObject = {
    router: connectRouter(history),
    app: appReducer,
  }
  return persistCombineReducers<PersistConfig>(config, reducersMapObject);
}
