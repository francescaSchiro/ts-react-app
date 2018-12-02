import { persistCombineReducers, PersistedState } from 'redux-persist';
import { RouterAction, connectRouter } from 'connected-react-router';
import { History } from 'history';
import { Reducer } from 'redux';

import { config } from 'src/core/persist';
import { MssAction } from 'src/types/custom';
// import appReducer from 'src/containers/App/reducer';


export default function getRootReducer(history: History): Reducer<PersistedState, RouterAction | MssAction> {
  return persistCombineReducers(config, {
    router: connectRouter(history),
    // app: appReducer,
  });
}
