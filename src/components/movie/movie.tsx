import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../redux/selected-movie/actions';
import { getMovieId, getSelectedMovie } from '../../selectors';

import './movie.scss';

export const Movie: React.FC = () => {
  const movieId = useSelector(getMovieId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(movieId));
  });

  const movie = useSelector(getSelectedMovie);

  return (
    <section className="movie">
      <div className="movie__poster">
        <img src={movie.Poster} alt={movie.Title} />
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
