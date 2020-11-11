/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectMovie } from '../../redux/actions';
import { toMoviePage } from '../../redux/routing/actions';

import './results-item.scss';

type ResultsItemProps = {
  movie: {
    Title: string
    Year: string
    Poster: string
    imdbID: string
  }
}

const ResultsItem: React.FC<ResultsItemProps> = ({ movie }: ResultsItemProps) => {
  const dispatch = useDispatch();

  const clickHandler = (event: any) => {
    event.preventDefault();
    dispatch(selectMovie(movie.imdbID));
    dispatch(toMoviePage(movie.Title));
  };

  return (
    <a
      href={`/film/${movie.Title}`}
      className="results__item results-item"
      onClick={clickHandler}
    >
      <img className="results-item__image" src={movie.Poster} alt={movie.Title} />
      <div className="results-item__info">
        <div className="results-item__descr">
          <h2 className="results-item__title">{movie.Title}</h2>
        </div>
        <div className="results-item__release-date">{movie.Year}</div>
      </div>
    </a>
  );
};

export default ResultsItem;
