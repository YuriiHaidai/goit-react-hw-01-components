import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className="description">
      <img src={avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li style={{ backgroundColor: `${generateColor()}` }}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li style={{ backgroundColor: `${generateColor()}` }}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li style={{ backgroundColor: `${generateColor()}` }}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
