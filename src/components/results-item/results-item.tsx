import React from 'react';

import './results-item.scss';

const ResultsItem: React.FC = () => (
  <div className="results__item results-item">
    <div className="results-item__image" />
    <div className="results-item__info">
      <div className="results-item__descr">
        <h2 className="results-item__title">Kill Bill: Vol. 1</h2>
        <p className="results-item__genre">Action & Adventure</p>
      </div>
      <div className="results-item__release-date">2003</div>
    </div>
  </div>
);

export default ResultsItem;
