import React from 'react';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { store, history } from '../..';
import { SearchPage } from '../../pages/search-page';
import { MoviePage } from '../../pages/movie-page';
import { Notifications } from '../notifications';
import { AddMoviePage } from '../../pages/add-movie-page';
import {
  addMovieLink, mainLink, movieLink, searchLink,
} from '../../routing';

export const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Notifications />
        <Switch>
          <Route
            path={movieLink.source}
            component={MoviePage}
          />
          <Route
            path={searchLink.source}
            component={SearchPage}
          />
          <Route
            path={addMovieLink.source}
            component={AddMoviePage}
          />
          <Route
            path={mainLink.source}
            component={SearchPage}
          />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>
);
