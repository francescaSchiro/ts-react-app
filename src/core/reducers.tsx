import { persistReducer, PersistedState } from 'redux-persist';
import { connectRouter, RouterAction, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer, ReducersMapObject } from 'redux';

import { commonPersistConfig, protectedPersistConfig } from 'src/core/persist';
import userReducer, { UserState } from 'src/shared/User/reducer';
import appReducer, { AppState } from 'src/containers/App/reducer';
import languageReducer, { LanguageProviderState } from 'src/containers/LanguageProvider/reducer';
import { MssAction } from 'src/types/custom';

interface Reducers extends ReducersMapObject {
  router: Reducer<RouterState, RouterAction>,
  language: Reducer<LanguageProviderState, MssAction>,
  app: Reducer<AppState, MssAction>,
  user: Reducer<UserState, MssAction>
}

export default function getRootReducer(history: History): Reducer<PersistedState, RouterAction | MssAction> {

  const reducers: Reducers = {
    router: connectRouter(history),
    language: languageReducer,
    app: appReducer,
    user: persistReducer(protectedPersistConfig, userReducer)
  };

  return persistReducer(commonPersistConfig, combineReducers(reducers));
}