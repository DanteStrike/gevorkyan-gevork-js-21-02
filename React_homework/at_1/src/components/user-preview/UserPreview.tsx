import React from 'react';
import './UserPreview.scss';
import {EditOutlined} from '@ant-design/icons';

function UserPreview() {
  return (
    <article className="user-preview">
      <img className="user-preview__img" alt="рисунок карточки" src="https://randomuser.me/api/portraits/men/3.jpg" />
      <p className="user-preview__info">
        <span className="user-preview__title">mr. Kavabanga</span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Пол:</span> Муржской
        </span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Дата рождения:</span> 20 апреля 1999
        </span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Дата регистрации:</span> 20 апреля 1999
        </span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Email:</span> anglardesesen@gmail.com
        </span>
        <span className="user-preview__row">
          <span className="user-preview__prop">Телефон:</span> +79091234455
        </span>
        <span className="user-preview__row user-preview__row--id">
          <span className="user-preview__prop">ID:</span> 123123123123123
        </span>
      </p>
      <button type="button" className="user-preview__edit">
        <EditOutlined />
        <span className="user-preview__edit-text">Редактировать</span>
      </button>
    </article>
  );
}

export default UserPreview;
