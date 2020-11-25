import { NotificationsActionTypes } from './types';

export const showNotification = (text: string, status: string) => ({
  type: NotificationsActionTypes.SHOW_NOTIFICATION,
  text,
  status,
});

export const closeNotification = (id: number) => ({
  type: NotificationsActionTypes.CLOSE_NOTIFICATION,
  id,
});
