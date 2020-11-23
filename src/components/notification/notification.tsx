import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getNotification, getStatus } from '../../redux/notifications/selectors';

import './notification.scss';
import iconClose from '../../images/icon-close.png';
import { closeNotification } from '../../redux/notifications/actions';

export const Notification: React.FC = () => {
  const notification = useSelector(getNotification);
  const notificationStatus = useSelector(getStatus);
  const dispatch = useDispatch();

  const HandleSubmit = () => {
    dispatch(closeNotification());
  };

  let styles = 'notification';
  switch (notificationStatus) {
    case 'success':
      styles += '  notification--success';
      break;
    case 'error':
      styles += '  notification--error';
      break;
    default:
      break;
  }

  if (!notification) return <></>;

  return (
    <div className={styles}>
      <button
        className="notification__icon-close"
        type="button"
        onClick={HandleSubmit}
      >
        <img src={iconClose} alt="close" />
      </button>
      <p className="notification__text">{notification}</p>
    </div>
  );
};
