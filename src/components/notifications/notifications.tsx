import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../../redux/notifications/selectors';

import './notifications.scss';
import iconClose from '../../images/icon-close.png';
import { closeNotification } from '../../redux/notifications/actions';

export type NotificationType = {
  id: number
  text: string
  status: string
};

export const Notifications: React.FC = () => {
  const notifications = useSelector(getNotifications);
  const dispatch = useDispatch();

  const HandleClick = (event: React.MouseEvent) => {
    const { id } = event.target.closest('.notification').dataset;
    dispatch(closeNotification(Number(id)));
  };

  if (notifications.length === 0) return <></>;

  return (
    <div className="notifications">
      {notifications.map((notification: NotificationType) => (
        <div
          className={`notification  notification--${notification.status}`}
          key={notification.id}
          data-id={notification.id}
        >
          <button
            className="notification__icon-close"
            type="button"
            onClick={HandleClick}
          >
            <img src={iconClose} alt="close" />
          </button>
          <p className="notification__text">{notification.text}</p>
        </div>
      ))}
    </div>
  );
};
