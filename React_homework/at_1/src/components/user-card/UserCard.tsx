import React from 'react';
import './UserCard.scss';

function UserCard() {
  return (
    <article className="card">
      <img className="card__img" alt="рисунок карточки" src="https://randomuser.me/api/portraits/men/3.jpg" />
      <h2 className="card__title">mr. Кавабанга</h2>
    </article>
  );
}

export default React.memo(UserCard);
