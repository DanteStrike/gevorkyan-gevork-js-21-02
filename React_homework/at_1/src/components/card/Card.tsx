import React from 'react';
import "./Card.scss";

function Card() {
  return (
    <article className="card">
      <img className="card__img" alt="рисунок карточки" src="https://via.placeholder.com/185"/>
      <h2 className="card__title">mr. Кавабанга</h2>
    </article>
  );
};

export default Card;
