import React from 'react';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(elem => (
      <li className={styles.item} key={elem.id}>
        <span className={elem.isOnline ? styles.onLine : styles.offLine}></span>
        <img
          className={styles.avatar}
          src={elem.avatar}
          alt={elem.name}
          width="48"
        />
        <p className={styles.name}>{elem.name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
