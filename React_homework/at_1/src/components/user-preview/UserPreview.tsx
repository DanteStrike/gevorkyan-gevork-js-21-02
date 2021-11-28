import React from 'react';
import './UserPreview.scss';
import {EditOutlined} from '@ant-design/icons';
import {IUser} from '../../types';
import Loading from '../loading/Loading';

interface IUserPreviewProps {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
}

function UserPreview({user, isLoading, isAuth}: IUserPreviewProps) {
  const {id, picture, title, firstName, lastName, gender, email, dateOfBirth, registerDate, phone} = user;
  const name = `${title ? `${title} .` : ``}${lastName} ${firstName}`;

  return (
    <article className="user-preview">
      <Loading isLoading={isLoading} />
      {picture ? <img className="user-preview__img" alt={name} src={picture} /> : <div className="user-preview__img" />}
      <p className="user-preview__info">
        <span className="user-preview__title">{name}</span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Пол:</span> {gender}
        </span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Дата рождения:</span> {dateOfBirth}
        </span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Дата регистрации:</span> {registerDate}
        </span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Email:</span> {email}
        </span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Телефон:</span> {phone}
        </span>
        <span className="user-preview__row user-preview__row--id">
          <span className="user-preview__prop">ID:</span> {id}
        </span>
      </p>
      {isAuth && (
        <button type="button" className="user-preview__edit">
          <EditOutlined />
          <span className="user-preview__edit-text">Редактировать</span>
        </button>
      )}
    </article>
  );
}

export default React.memo(UserPreview);
