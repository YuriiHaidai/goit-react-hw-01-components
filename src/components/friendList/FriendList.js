import React from 'react';

export const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(elem => (
      <li className="item" key={elem.id}>
        <span className="status"></span>
        <img className="avatar" src={elem.avatar} alt={elem.name} width="48" />
        <p className="name">{elem.name}</p>
      </li>
    ))}
  </ul>
);
