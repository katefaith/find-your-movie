import React from 'react';
import { useSelector } from 'react-redux';
import { moviesSelector, isFetchingSelector, numberOfMoviesSelector } from '../../selectors';

import ResultsItem from '../results-item';

import './results-body.scss';

const ResultsBody: React.FC = () => {
  const movies = useSelector(moviesSelector);
  const isFetching = useSelector(isFetchingSelector);
  const numberOfMovies = useSelector(numberOfMoviesSelector);

  if (isFetching) {
    return <p className="wrapper">Loading...</p>;
  }
  if (!numberOfMovies) {
    return <p className="wrapper">No films found</p>;
  }
  return (
    <div className="results__body  wrapper">
      {movies.map((movie: any) => <ResultsItem movie={movie} key={movie.imdbID} />)}
    </div>
  );
};

export default ResultsBody;
