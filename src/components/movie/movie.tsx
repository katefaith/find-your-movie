import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getMovie } from '../../redux/selected-movie/actions';
import {
  getCurrentPathname, getIsMovieFetching, getMovieId, getSelectedMovie,
} from '../../selectors';

import './movie.scss';
import defaultPoster from '../../images/default-poster.jpg';

export const Movie: React.FC = () => {
  const movieId = useSelector(getMovieId);
  const isFetching = useSelector(getIsMovieFetching);
  const movie = useSelector(getSelectedMovie);
  const pathname = useSelector(getCurrentPathname);
  const dispatch = useDispatch();

  useEffect(() => {
    if (movie.imdbID !== movieId && !isFetching) {
      dispatch(getMovie(movieId));
    }
  });

  if (pathname.includes('/movie') && Object.keys(movie).length === 0) {
    return (
      <Redirect to="/" />
    );
  }

  if (isFetching) {
    return (
      <section className="movie">
        <div className="movie__notification">Loading...</div>
      </section>
    );
  }

  return (
    <section className="movie">
      <div className="movie__poster">
        <img
          src={(movie.Poster !== 'N/A') ? movie.Poster : defaultPoster}
          alt={movie.Title}
        />
      </div>
      <div className="movie__info">
        <h1 className="movie__title">{movie.Title}</h1>
        <p className="movie__genre">{movie.Genre}</p>
        <div className="movie__row">
          <p className="movie__year">{movie.Year}</p>
          <p className="movie__runtime">{movie.Runtime}</p>
        </div>
        <p className="movie__plot">{movie.Plot}</p>
        <p className="movie__director">
          {'Director: '}
          {movie.Director}
        </p>
        <p className="movie__actors">
          {'Cast: '}
          {movie.Actors}
        </p>

      </div>
    </section>
  );
};
