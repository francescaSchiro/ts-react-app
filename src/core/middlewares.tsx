import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';

export const sagaMiddleware = createSagaMiddleware();

export default function getMiddlewares(history) {
  const middlewares = applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  );

  return middlewares;
}
