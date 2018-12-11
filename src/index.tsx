import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createBrowserHistory, History } from 'history';

import configure from 'src/core/store';
import getRootReducer from 'src/core/reducers';
import Routes from 'src/core/routes';
import { TranslationMessages, translationMessages } from 'src/core/i18n';
import LanguageProvider from 'src/containers/LanguageProvider';
import GlobalStyles from 'src/theme/GlobalStyle';
import { ThemeProvider, DefaultTheme } from 'src/theme/default';
import { MOUNT_NODE_ID } from 'src/config';
import registerServiceWorker from 'src/registerServiceWorker';


const history: History = createBrowserHistory();
const { store, persistor } = configure(history);
const MOUNT_NODE = document.getElementById(MOUNT_NODE_ID) as HTMLElement;

const render = (messages: TranslationMessages) => ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={DefaultTheme}>
            <React.Fragment>
              <GlobalStyles />
              <Routes />
            </React.Fragment>
          </ThemeProvider>
        </ConnectedRouter>
      </LanguageProvider>
    </PersistGate>
  </Provider>,
  MOUNT_NODE
);

// Start
render(translationMessages);
registerServiceWorker();

// Hot reloading
const MODULE = module as any;
if (MODULE.hot) {
  // Reload components
  MODULE.hot.accept('src/core/i18n', 'src/containers/App', () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
  // Reload reducers
  MODULE.hot.accept('src/core/reducers', () => {
    store.replaceReducer(getRootReducer(history));
  })
}