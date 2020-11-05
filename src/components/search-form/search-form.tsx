import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchMovies from '../../redux/actions';

import './search-form.scss';

const SearchForm: React.FC = () => {
  const [request, setReuest] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (event: any) => {
    event.preventDefault();
    dispatch(fetchMovies()); // fetchMovies(request)
  };

  return (
    <form className="search__form" onSubmit={submitHandler}>
      <h1 className="search__title">Find your movie</h1>
      <input
        className="search__input"
        type="text"
        value={request}
        onChange={(event) => setReuest(event.target.value)}
        placeholder="What do you want to watch?"
      />

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
};

export default SearchForm;
