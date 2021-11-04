import React, {useEffect} from 'react';
import {IUserPreview} from '../../types';
import './User.css';

interface IUserProps {
  user: IUserPreview;
  setTooltipText: (text: string) => void;
}

function User ({user, setTooltipText}: IUserProps) {
  useEffect(() => {
    setTooltipText(user.id);
  }, [setTooltipText, user.id])

  const {title, firstName, lastName, picture} = user;
  return (
    <article className="user">
      <img className="user__image" src={picture} alt={`${lastName} ${firstName}`} />
      <h2 className="user__name">{`${title}. ${lastName} ${firstName}`}</h2>
    </article>
  );
}

export default User;
