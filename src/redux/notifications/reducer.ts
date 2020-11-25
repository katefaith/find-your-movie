import { InferValueTypes } from '../../types/common';
import { NotificationsActionTypes } from './types';
import * as actions from './actions';
import { NotificationType } from '../../components/notifications/notifications';

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type InitialNotificationsStateType = {
  notifications: NotificationType[]
}

const initialState: InitialNotificationsStateType = {
  notifications: [],
};

export const notificationReducer = (
  state = initialState,
  action: ActionTypes,
): InitialNotificationsStateType => {
  switch (action.type) {
    case NotificationsActionTypes.SHOW_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.concat({
          text: action.text,
          status: action.status,
          id: randomId(1000, 9999),
        }),
      };
    case NotificationsActionTypes.CLOSE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

function randomId(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
