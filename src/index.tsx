import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { compose, createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import App from './components/app';
import Film from './components/film';
import rootReducer from './redux/rootReducer';

import './sass/styles.scss';
import { rootSaga } from './redux/rootSaga';

export const history = createBrowserHistory();
const saga = createSagaMiddleware();

const store = createStore(
  rootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), saga),
    // eslint-disable-next-line no-underscore-dangle
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

saga.run(rootSaga);

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path="/film/:movieTitle"
          component={Film}
        />
        <Route
          path="/search/:request"
          component={App}
        />
        <Route
          path="/"
          component={App}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
