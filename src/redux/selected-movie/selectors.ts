import { RootState } from '../rootReducer';
import { SelectedMovieType } from '../../components/movie/movie';

export const getIsMovieFetching = (state: RootState): boolean => state.selectedMovie.isFetching;
export const getSelectedMovie = (state: RootState): SelectedMovieType => state.selectedMovie.data;
