import React from 'react';
import { useSelector } from 'react-redux';
import {
  getIsFetching, getMoviesCount, getSortedMovies,
} from '../../selectors';

import ResultsItem from '../results-item';

import './results-body.scss';

const ResultsBody: React.FC = () => {
  const isFetching = useSelector(getIsFetching);
  const moviesCount = useSelector(getMoviesCount);
  const sortedMovies = useSelector(getSortedMovies);

  if (isFetching) {
    return <p className="results__notification">Loading...</p>;
  }
  if (!moviesCount) {
    return <p className="results__notification">No films found</p>;
  }
  return (
    <div className="results__body  wrapper">
      {sortedMovies.map((movie: any) => <ResultsItem movie={movie} key={movie.imdbID} />)}
    </div>
  );
};

export default ResultsBody;
