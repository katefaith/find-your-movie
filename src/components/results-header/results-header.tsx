import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentPathname, getMoviesCount } from '../../selectors';

import { ResultsFilter } from '../results-filter';

import './results-header.scss';

export const ResultsHeader: React.FC = () => {
  const moviesCount = useSelector(getMoviesCount);
  const pathname = useSelector(getCurrentPathname);

  const resultsCount = (
    <div className="results__info">
      {moviesCount}
      {(moviesCount === 1) ? ' movie ' : ' movies '}
      found
    </div>
  );

  const otherMovies = <div className="results__info">Other movies by your search query</div>;

  if (!moviesCount) {
    return (<div className="results__header" />);
  }

  return (
    <div className="results__header">
      <div className="wrapper">
        <div className="results__header-inner">
          {(!pathname.includes('movie')) ? resultsCount : otherMovies}
          {(!pathname.includes('movie')) && <ResultsFilter />}
        </div>
      </div>
    </div>
  );
};
