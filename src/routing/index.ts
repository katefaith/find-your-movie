import { compile } from 'path-to-regexp';

export type RouteWithParams = {
    movieTitle?: string;
    searchRequest?: string;
}

export type InternalLink = {
    source: string;
    get: (params?: RouteWithParams) => string;
}

const MAIN = '/';

export const mainLink: InternalLink = {
  source: MAIN,
  get: () => MAIN,
};

const MOVIE = '/movie/:movieTitle';
const movieCompile = compile(MOVIE);

export const movieLink: InternalLink = {
  source: MOVIE,
  get: (params?: RouteWithParams) => movieCompile(params),
};

const SEARCH = '/search/:searchRequest';
const searchCompile = compile(SEARCH);

export const searchLink: InternalLink = {
  source: SEARCH,
  get: (params?: RouteWithParams) => searchCompile(params),
};

const ADD_MOVIE = '/add-movie';

export const addMovieLink: InternalLink = {
  source: ADD_MOVIE,
  get: () => ADD_MOVIE,
};
