import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMovies } from '../../redux/movies/actions';
import { goToPage } from '../../redux/routing/actions';
import { getCurrentPathname } from '../../redux/routing/selectors';
import { mainLink } from '../../routing';

import './header.scss';

export const Header: React.FC = () => {
  const pathname = useSelector(getCurrentPathname);
  const dispatch = useDispatch();

  const clickHandler = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(goToPage(mainLink.get()));
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
