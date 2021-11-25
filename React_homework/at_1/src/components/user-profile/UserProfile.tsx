import React from 'react';
import "./UserProfile.scss";

function UserProfile() {
  return (
    <article className="user-profile">
      <img className="user-profile__img" alt="рисунок карточки" src="https://randomuser.me/api/portraits/men/3.jpg" />
      <p className="user-profile__info">
        <span className="user-profile__title">mr. Kavabanga</span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Пол:</span> Муржской
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Дата рождения:</span> 20 апреля 1999
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Дата регистрации:</span> 20 апреля 1999
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Email:</span> anglardesesen@gmail.com
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Телефон:</span> +79091234455
        </span>
        <span className="user-profile__row user-profile__row--id">
          <span className="user-profile__prop">ID:</span> 123123123123123
        </span>
      </p>
      <div className="user-profile__edit">Редактировать</div>
    </article>
  );
};

export default UserProfile;
