import React from 'react';
import './UserPreview.scss';

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
      <div className="user-preview__edit">Редактировать</div>
    </article>
  );
}

export default UserPreview;
