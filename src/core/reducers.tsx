import { persistCombineReducers } from 'redux-persist';
import { LOCATION_CHANGE } from 'connected-react-router';
import { merge } from 'lodash';

import { config } from 'app/core/persist';
import appReducer from 'app/containers/App/reducer';


const routeInitialState = {
  location: null,
};
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return merge({}, state, action.payload);
    default:
      return state;
  }
}

export default function getRootReducer() {
  return persistCombineReducers(config, {
    router: routeReducer,
    app: appReducer,
  });
}
