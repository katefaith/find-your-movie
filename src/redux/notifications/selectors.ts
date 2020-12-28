import { NotificationType } from '../../components/notifications/notifications';
import { RootState } from '../rootReducer';

export const getNotifications = (
  state: RootState,
): NotificationType[] => state.notifications.notifications;
