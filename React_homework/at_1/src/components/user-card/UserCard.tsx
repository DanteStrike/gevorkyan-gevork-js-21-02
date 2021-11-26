import React from 'react';
import './UserCard.scss';
import {IUserPreview} from '../../types';

interface IUserCardProps {
  user: IUserPreview;
}

function UserCard({user}: IUserCardProps) {
  const {firstName, lastName, title, picture} = user;
  const name = `${title}. ${lastName} ${firstName}`;

  return (
    <article className="card">
      <img className="card__img" alt={name} src={picture} />
      <h2 className="card__title">{name}</h2>
    </article>
  );
}

export default React.memo(UserCard);
