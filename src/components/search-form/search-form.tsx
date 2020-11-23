import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { getMovies } from '../../redux/movies/actions';
import { RouteWithParams } from '../../routing';

import './search-form.scss';

export const SearchForm: React.FC = () => {
  const [request, setReuest] = useState('');
  const [searchType, setSearchType] = useState('movie');
  const dispatch = useDispatch();
  const { searchRequest } = useRouteMatch<RouteWithParams>().params;

  useEffect(() => {
    if (searchRequest
      && searchRequest !== request) { // не дублировать запрос при изменении урла
      dispatch(getMovies(searchRequest, searchType));
    }
  }, [searchRequest]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (request) {
      dispatch(getMovies(request, searchType));
    }
  };

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSearchType(event.target.value);
    }
  };

  return (
    <form className="search__form" onSubmit={handleSubmit}>
      <h1 className="search__title">Find your movie</h1>
      <input
        className="search__input"
        type="text"
        value={request}
        onChange={(event) => setReuest(event.target.value)}
        placeholder="What do you want to find?"
      />

      <div className="search__actions">
        <div className="search__filfer">
          Search for
          <label htmlFor="movie">
            <input id="movie" type="radio" name="search" value="movie" onChange={handleChangeRadio} defaultChecked />
            Movie
          </label>
          <label htmlFor="series">
            <input id="series" type="radio" name="search" value="series" onChange={handleChangeRadio} />
            Series
          </label>
        </div>
        <button className="search__button  button" type="submit">Search</button>
      </div>

    </form>
  );
};
