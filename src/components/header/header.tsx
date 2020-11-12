import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMovies } from '../../redux/movies/actions';
import { toSearchPage } from '../../redux/routing/actions';
import { getCurrentPathname } from '../../selectors';

import './header.scss';

export const Header: React.FC = () => {
  const pathname = useSelector(getCurrentPathname);
  const dispatch = useDispatch();

  const clickHandler = (event: any) => {
    event.preventDefault();
    dispatch(toSearchPage());
    dispatch(clearMovies());
  };

  const link = (
    <a
      href="/"
      className="header__link"
      onClick={clickHandler}
    >
      Search
    </a>
  );

  return (
    <header className="header">
      <div className="header__logo">netflixroulette</div>
      {pathname.includes('movie') && link}
    </header>
  );
};
