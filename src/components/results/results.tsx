import React from 'react';

import ResultsHeader from '../results-header';
import ResultsBody from '../results-body';

import './results.scss';

const Results: React.FC = () => (
  <section className="results">
    <ResultsHeader />
    <ResultsBody />
  </section>
);

export default Results;
