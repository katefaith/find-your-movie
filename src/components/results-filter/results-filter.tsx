import React from 'react';

import './results-filter.scss';

const ResultsFilter:React.FC = () => (
  <form className="results__filter">
    Sort by
    <label htmlFor="release-date">
      <input id="release-date" type="radio" name="sort" value="release date" />
      Title
    </label>
    <label htmlFor="rating">
      <input id="rating" type="radio" name="sort" value="rating" />
      Director
    </label>
  </form>
);

export default ResultsFilter;
