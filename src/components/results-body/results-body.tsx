import React from 'react';
import { useSelector } from 'react-redux';

import ResultsItem from '../results-item';

import './results-body.scss';

type RootState = {
  movies: {
    movies: any
  }
}

const ResultsBody: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  // console.log('movies = ', movies);

  if (!movies.length) {
    return <p className="wrapper">Ничего не найдено</p>;
  }
  return (
    <div className="results__body  wrapper">
      {movies.map((movie: any) => <ResultsItem movie={movie} key={movie.imdbID} />)}
    </div>
  );
};

export default ResultsBody;
