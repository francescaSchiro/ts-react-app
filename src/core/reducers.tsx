import { persistReducer, PersistedState } from 'redux-persist';
import { connectRouter, RouterAction } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';

import { commonPersistConfig, protectedPersistConfig } from 'src/core/persist';
import userReducer from 'src/shared/User/reducer';
import appReducer from 'src/containers/App/reducer';
import languageReducer from 'src/containers/LanguageProvider/reducer';
import { MssAction } from 'src/types/custom';


export default function getRootReducer(history: History): Reducer<PersistedState, RouterAction | MssAction> {

  const rootReducer = combineReducers({
    router: connectRouter(history),
    language: languageReducer,
    app: appReducer,
    user: persistReducer(protectedPersistConfig, userReducer)
  });

  return persistReducer(commonPersistConfig, rootReducer);
}