import React from 'react';

import './search-form.scss';

const SearchForm: React.FC = () => (
  <form className="search__form">
    <h1 className="search__title">Find your movie</h1>
    <input className="search__input" type="text" placeholder="What do you want to watch?" />

    <div className="search__actions">
      <div className="search__filfer">
        Search by
        <label htmlFor="title">
          <input id="title" type="radio" name="search" value="Title" />
          Title
        </label>
        <label htmlFor="director">
          <input id="director" type="radio" name="search" value="Director" />
          Director
        </label>
      </div>
      <button className="search__button  button" type="submit">Search</button>
    </div>

  </form>
);

export default SearchForm;
