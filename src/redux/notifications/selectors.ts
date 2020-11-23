import { RootState } from '../rootReducer';

export const getNotification = (state: RootState): string | null => state.notifications.text;
export const getStatus = (state: RootState): string | null => state.notifications.status;
