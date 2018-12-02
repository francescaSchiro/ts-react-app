import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, StoreEnhancer } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';

export const sagaMiddleware = createSagaMiddleware();

export default function getMiddlewares(history: History): StoreEnhancer {
  const middlewares = composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware
    ));

  return middlewares;
}
