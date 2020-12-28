import { RootState } from '../rootReducer';

export const getCurrentPathname = (state: RootState): string => state.router.location.pathname;
