import React from 'react';

import ResultsItem from '../results-item';

import './results-body.scss';

const ResultsBody: React.FC = () => (
  <div className="results__body  wrapper">
    <ResultsItem />
    <ResultsItem />
    <ResultsItem />
    <ResultsItem />
  </div>
);

export default ResultsBody;
