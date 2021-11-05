import React from 'react';
import {IUserPreview} from '../../types';
import './User.css';

interface IUserProps {
  user: IUserPreview;
}

function User({user}: IUserProps) {
  const {title, firstName, lastName, picture} = user;
  return (
    <article className="user">
      <img className="user__image" src={picture} alt={`${lastName} ${firstName}`} />
      <h2 className="user__name">{`${title}. ${lastName} ${firstName}`}</h2>
    </article>
  );
}

export default User;
