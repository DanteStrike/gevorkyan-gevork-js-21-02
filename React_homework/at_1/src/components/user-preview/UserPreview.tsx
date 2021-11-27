import React from 'react';
import './UserPreview.scss';
import {EditOutlined} from '@ant-design/icons';
import {IUser} from '../../types';
import Loading from '../loading/Loading';

interface IUserPreviewProps {
  user: IUser;
  isLoading: boolean;
}

function UserPreview({user, isLoading}: IUserPreviewProps) {
  const {id, picture, title, firstName, lastName, gender, email, dateOfBirth, registerDate, phone} = user;

  return (
    <article className="user-preview">
      <Loading isLoading={isLoading} />
      <img className="user-preview__img" alt="рисунок карточки" src={picture} />
      <p className="user-preview__info">
        <span className="user-preview__title">{`${title}. ${firstName} ${lastName}`}</span>
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
      <button type="button" className="user-preview__edit">
        <EditOutlined />
        <span className="user-preview__edit-text">Редактировать</span>
      </button>
    </article>
  );
}

export default React.memo(UserPreview);
