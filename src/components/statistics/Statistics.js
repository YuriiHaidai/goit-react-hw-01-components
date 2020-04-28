import React from 'react';
import styles from './Statistics.module.css';

function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.stat_list}>
      {stats.map(stat => (
        <li
          className={styles.item}
          key={stat.id}
          style={{ backgroundColor: `${generateColor()}` }}
        >
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
