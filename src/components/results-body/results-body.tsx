import React from 'react';
import { useSelector } from 'react-redux';
import {
  getFilteredMovies, getIsFetching, getMoviesCount, getSortedMovies,
} from '../../redux/movies/selectors';
import { getCurrentPathname } from '../../redux/routing/selectors';
import { ResultsItem } from '../results-item';

import './results-body.scss';

export type MovieType = {
  Title: string
  Year: string
  Poster: string
  imdbID: string
}

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
      {movies.map((movie: MovieType) => <ResultsItem movie={movie} key={movie.imdbID} />)}
    </div>
  );
};
