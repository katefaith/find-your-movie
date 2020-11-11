import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentPathname, getMoviesCount } from '../../selectors';

import ResultsFilter from '../results-filter';

import './results-header.scss';

const ResultsHeader: React.FC = () => {
  const moviesCount = useSelector(getMoviesCount);
  const pathname = useSelector(getCurrentPathname);

  if (!moviesCount) {
    return (<div className="results__header" />);
  }

  return (
    <div className="results__header">
      <div className="wrapper">
        <div className="results__header-inner">
          <div className="results__count">
            {moviesCount}
            {(moviesCount === 1) ? ' movie ' : ' movies '}
            found
          </div>
          {(!pathname.includes('movie')) && <ResultsFilter />}
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;
