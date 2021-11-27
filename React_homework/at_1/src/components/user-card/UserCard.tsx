import React from 'react';
import './UserCard.scss';
import {Tooltip} from "antd";
import {IUserPreview} from '../../types';

interface IUserCardProps {
  user: IUserPreview;
}

function UserCard({user}: IUserCardProps) {
  const {firstName, lastName, title, picture} = user;
  const name = `${title}. ${lastName} ${firstName}`;

  return (
      <article className="user-card" id={`#user-${user.id}`}>
        <img className="user-card__img" alt={name} src={picture} />
        <Tooltip
          placement="top"
          title={user.id}
          getPopupContainer={() => document.querySelector(`#user-${user.id}`) || document.body}
        >
          <h2 className="user-card__title">{name}</h2>
        </Tooltip>
      </article>
  );
}

export default React.memo(UserCard);
