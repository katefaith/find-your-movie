import React from 'react';
import { useSelector } from 'react-redux';
import { getMoviesCount } from '../../selectors';

import ResultsFilter from '../results-filter';

import './results-header.scss';

const ResultsHeader: React.FC = () => {
  const moviesCount = useSelector(getMoviesCount);

  if (!moviesCount) {
    return (<div className="results__header" />);
  }

  return (
    <div className="results__header">
      <div className="results__header-inner  wrapper">
        <div className="results__count">
          {moviesCount}
          {(moviesCount === 1) ? ' movie ' : ' movies '}
          found
        </div>
        <ResultsFilter />
      </div>
    </div>
  );
};

export default ResultsHeader;
