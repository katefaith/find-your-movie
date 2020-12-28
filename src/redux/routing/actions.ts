import { RoutingActionTypes } from './types';

export const goToPage = (path: string) => ({
  type: RoutingActionTypes.GO_TO_PAGE,
  path,
});
