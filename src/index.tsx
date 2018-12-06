import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory, History } from 'history';

import configure from 'src/core/store';
import App from 'src/containers/App';
import HttpClient from 'src/utils/HttpClient';
import Api from 'src/utils/Api';
import registerServiceWorker from './registerServiceWorker';

import GlobalStyles from 'src/theme/GlobalStyle';
import { ThemeProvider, DefaultTheme } from 'src/theme/default';


const history: History = createBrowserHistory();
const { store, persistor } = configure(history);
const MOUNT_NODE = document.getElementById('root') as HTMLElement;
const httpClient = new HttpClient();
const api = new Api(httpClient);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={DefaultTheme}>
          <React.Fragment>
            <GlobalStyles />
            <App api={api} />
          </React.Fragment>
        </ThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  MOUNT_NODE,
);

registerServiceWorker();

// // Hot reloading
// if (module.hot) {
//   // Reload components
//   module.hot.accept('./App', () => {
//     render()
//   })

//   // Reload reducers
//   module.hot.accept('./reducers', () => {
//     store.replaceReducer(rootReducer(history))
//   })
// }