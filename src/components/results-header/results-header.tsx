import React from 'react';
import { useSelector } from 'react-redux';
import { numberOfMoviesSelector } from '../../selectors';

import ResultsFilter from '../results-filter';

import './results-header.scss';

const ResultsHeader: React.FC = () => {
  const numberOfMovies = useSelector(numberOfMoviesSelector);

  if (!numberOfMovies) {
    return (<div className="results__header" />);
  }

  return (
    <div className="results__header">
      <div className="results__header-inner  wrapper">
        <div className="results__count">
          {numberOfMovies}
          {(numberOfMovies === 1) ? ' movie ' : ' movies '}
          found
        </div>
        <ResultsFilter />
      </div>
    </div>
  );
};

export default ResultsHeader;
