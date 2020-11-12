import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/movies/actions';
import { getCurrentPathname, getMoviesCount } from '../../selectors';

import './search-form.scss';

export const SearchForm: React.FC = () => {
  const [request, setReuest] = useState('');
  const [searchType, setSearchType] = useState('movie');
  const dispatch = useDispatch();

  const moviesCount = useSelector(getMoviesCount);
  const pathname = useSelector(getCurrentPathname);
  let requestFromUrl = '';
  if (pathname.includes('search')) {
    const arr = pathname.split('/');
    requestFromUrl = arr[arr.length - 1];
  }

  useEffect(() => {
    if (requestFromUrl && requestFromUrl !== request && !moviesCount) {
      dispatch(getMovies(requestFromUrl, searchType));
    }
  });

  const submitHandler = (event: any) => {
    event.preventDefault();
    dispatch(getMovies(request, searchType));
  };

  const radioChangeHandler = (event: any) => {
    if (event.target.checked) {
      setSearchType(event.target.value);
    }
  };

  return (
    <form className="search__form" onSubmit={submitHandler}>
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
            <input id="movie" type="radio" name="search" value="movie" onChange={radioChangeHandler} defaultChecked />
            Movie
          </label>
          <label htmlFor="series">
            <input id="series" type="radio" name="search" value="series" onChange={radioChangeHandler} />
            Series
          </label>
        </div>
        <button className="search__button  button" type="submit">Search</button>
      </div>

    </form>
  );
};
