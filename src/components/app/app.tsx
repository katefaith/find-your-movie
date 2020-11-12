import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { store, history } from '../..';
import { SearchPage } from '../../pages/search-page';
import { MoviePage } from '../../pages/movie-page';

export const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path="/movie/:movieTitle"
          component={MoviePage}
        />
        <Route
          path="/search/:request"
          component={SearchPage}
        />
        <Route
          path="/"
          component={SearchPage}
        />
      </Switch>
    </ConnectedRouter>
  </Provider>
);
