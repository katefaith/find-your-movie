import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';

import { App } from './components/app';
import { rootReducer } from './redux/rootReducer';

import './sass/styles.scss';
import { rootSaga } from './redux/rootSaga';

export const history = createBrowserHistory();
const saga = createSagaMiddleware();

export const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), saga),
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

saga.run(rootSaga);

ReactDOM.render(<App />, document.getElementById('root'));
