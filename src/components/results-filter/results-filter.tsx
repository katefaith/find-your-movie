import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortByFilter } from '../../redux/movies/actions';

import './results-filter.scss';

export const ResultsFilter:React.FC = () => {
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    if (event.target.checked) {
      dispatch(setSortByFilter(event.target.value));
    }
  };

  return (
    <form className="results__filter">
      Sort by
      <label htmlFor="movie-title">
        <input id="movie-title" type="radio" name="sort" onChange={changeHandler} defaultChecked value="Title" />
        Title
      </label>
      <label htmlFor="release-year">
        <input id="release-year" type="radio" name="sort" onChange={changeHandler} value="Year" />
        Release year
      </label>
    </form>
  );
};
