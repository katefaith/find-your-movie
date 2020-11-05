import React from 'react';
import { useSelector } from 'react-redux';

import ResultsItem from '../results-item';

import './results-body.scss';

type RootState = {
  movies: {
    movies: any
    isFetching: boolean
  }
}

const ResultsBody: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const isFetching = useSelector((state: RootState) => state.movies.isFetching);

  if (isFetching) {
    return <p className="wrapper">Loading...</p>;
  }
  if (!movies.length) {
    return <p className="wrapper">No films found</p>;
  }
  return (
    <div className="results__body  wrapper">
      {movies.map((movie: any) => <ResultsItem movie={movie} key={movie.imdbID} />)}
    </div>
  );
};

export default ResultsBody;
