import { persistCombineReducers, PersistedState } from 'redux-persist';
import { Reducer } from 'redux';
import { LOCATION_CHANGE, RouterAction } from 'connected-react-router';
import { merge } from 'lodash';

import { RouteState } from '../types/states';
import { config } from 'src/core/persist';
import { MssAction } from '../types/custom';
// import appReducer from 'src/containers/App/reducer';


const routeInitialState: RouteState = {
  location: null,
};
function routeReducer(state: RouteState = routeInitialState, action: RouterAction) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return merge({}, state, action.payload);
    default:
      return state;
  }
}

export default function getRootReducer(): Reducer<PersistedState, RouterAction | MssAction> {
  return persistCombineReducers(config, {
    router: routeReducer,
    // app: appReducer,
  });
}
