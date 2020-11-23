import { InferValueTypes } from '../../types/common';
import { NotificationsActionTypes } from './types';
import * as actions from './actions';

export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>

export type InitialNotificationsStateType = {
  text: string | null
  status: string | null
}

const initialState: InitialNotificationsStateType = {
  text: null,
  status: null,
};

export const notificationReducer = (
  state = initialState,
  action: ActionTypes,
): InitialNotificationsStateType => {
  switch (action.type) {
    case NotificationsActionTypes.SHOW_NOTIFICATION:
      return { ...state, text: action.text, status: action.status };
    case NotificationsActionTypes.CLOSE_NOTIFICATION:
      return { ...state, text: null, status: null };
    default:
      return state;
  }
};
