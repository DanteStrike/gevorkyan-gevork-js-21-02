import React from 'react';
import './PostCard.scss';
import {Avatar} from 'antd';

interface IPostCard {
  hideTop?: boolean;
}

function PostCard({hideTop = false}: IPostCard) {
  return (
    <article className={`post-card ${hideTop ? `post-card--top-hide` : ``}`}>
      <div className={`post-card__top ${hideTop ? `post-card__top--hide` : ``}`}>
        <Avatar className="post-card__avatar" />
        <div className="post-card__wrap">
          <h2 className="post-card__title">mr. Кавабанга</h2>
          <p className="post-card__date">25 мая в 04:20</p>
        </div>
      </div>
      <img className="post-card__img" src="https://randomuser.me/api/portraits/men/2.jpg" alt="post-card__img" />
      <p className="post-card__text">
        Lorem ipsum dolor sit amet, consectetur adipiscin. Lorem ipsum dolor sit amet, consectetur adipiscin.
      </p>
    </article>
  );
}

PostCard.defaultProps = {
  hideTop: false,
};

export default React.memo(PostCard);
