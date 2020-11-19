import React from 'react';
import { useDispatch } from 'react-redux';
import { goToPage } from '../../redux/routing/actions';
import { addMovieLink } from '../../routing';

import './footer.scss';

export const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(goToPage(addMovieLink.get()));
  };

  return (
    <footer className="footer">
      <div className="wrapper  footer__wrapper">
        <div>netflixroulette</div>
        <a
          href={`${addMovieLink.source}`}
          className="footer__link"
          onClick={handleClick}
        >
          Add movie
        </a>
      </div>
    </footer>
  );
};
