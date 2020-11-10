import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../redux/selected-movie/actions';
import { getMovieId } from '../../selectors';

const Film: React.FC = () => {
  const movieId = useSelector(getMovieId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(movieId));
  });

  return (
    <h1>
      FILM
      {movieId}
    </h1>
  );
};

export default Film;
