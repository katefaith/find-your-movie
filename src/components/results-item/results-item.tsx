/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../../redux/movies/actions';
import { goToPage } from '../../redux/routing/actions';
import { movieLink } from '../../routing';
import { MovieType } from '../results-body/results-body';

import './results-item.scss';
import defaultPoster from '../../images/default-poster.jpg';

type ResultsItemProps = {
  movie: MovieType
}

export const ResultsItem: React.FC<ResultsItemProps> = ({ movie }: ResultsItemProps) => {
  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(selectMovie(movie.imdbID));
    dispatch(goToPage(movieLink.get({ movieTitle: movie.Title })));
  };

  return (
    <a
      href={`/film/${movie.Title}`}
      className="results__item results-item"
      onClick={handleClick}
    >
      <img
        className="results-item__image"
        src={(movie.Poster !== 'N/A') ? movie.Poster : defaultPoster}
        alt={movie.Title}
      />
      <div className="results-item__info">
        <div className="results-item__descr">
          <h2 className="results-item__title">{movie.Title}</h2>
        </div>
        <div className="results-item__release-date">{movie.Year}</div>
      </div>
    </a>
  );
};
