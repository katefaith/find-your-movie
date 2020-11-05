import React from 'react';

import './results-item.scss';

type ResultsItemProps = {
  movie: {
    Title: string
    Year: string
    Poster: string
  }
}

const ResultsItem: React.FC<ResultsItemProps> = ({ movie }: ResultsItemProps) => (
  <div className="results__item results-item">
    {/* <div className="results-item__image" /> */}
    <img src={movie.Poster} alt={movie.Title} />
    <div className="results-item__info">
      <div className="results-item__descr">
        <h2 className="results-item__title">{movie.Title}</h2>
        {/* <p className="results-item__genre">Action & Adventure</p> */}
      </div>
      <div className="results-item__release-date">{movie.Year}</div>
    </div>
  </div>
);

export default ResultsItem;
