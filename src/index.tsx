import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { Persistor } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory } from 'history';

import configure from 'src/core/store';
import { StoreState } from 'src/types';
import registerServiceWorker from './registerServiceWorker';
import App from 'src/containers/App';

const initialState: StoreState = {
  languageName: '',
  enthusiasmLevel: 0
};
const history = createBrowserHistory();
const { store, persistor } = configure(initialState, history);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact={true} path='/' component={App} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  MOUNT_NODE,
);

registerServiceWorker();