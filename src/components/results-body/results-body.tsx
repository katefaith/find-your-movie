import React from 'react';
import { useSelector } from 'react-redux';
import {
  getCurrentPathname,
  getFilteredMovies,
  getIsFetching,
  getMoviesCount,
  getSortedMovies,
} from '../../selectors';

import { ResultsItem } from '../results-item';

import './results-body.scss';

export const ResultsBody: React.FC = () => {
  const isFetching = useSelector(getIsFetching);
  const moviesCount = useSelector(getMoviesCount);
  const sortedMovies = useSelector(getSortedMovies);
  const filteredMovies = useSelector(getFilteredMovies);
  const pathname = useSelector(getCurrentPathname);
  const movies = (pathname.includes('movie') ? filteredMovies : sortedMovies);

  if (isFetching) {
    return <p className="results__notification">Loading...</p>;
  }
  if (!moviesCount) {
    return <p className="results__notification">No films found</p>;
  }
  return (
    <div className="results__body  wrapper">
      {movies.map((movie: any) => <ResultsItem movie={movie} key={movie.imdbID} />)}
    </div>
  );
};
