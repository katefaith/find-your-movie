import React from 'react';

import ResultsFilter from '../results-filter';

import './results-header.scss';

const ResultsHeader: React.FC = () => (
  <div className="results__header">
    <div className="results__header-inner  wrapper">
      <div className="results__count">7 movies found</div>
      <ResultsFilter />
    </div>
  </div>
);

export default ResultsHeader;
