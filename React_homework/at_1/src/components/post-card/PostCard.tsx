import React from 'react';
import './PostCard.scss';
import {Avatar} from 'antd';
import {IPostPreview} from "../../types";

interface IPostCard {
  post: IPostPreview
  hideTop?: boolean;
}

function PostCard({hideTop = false, post}: IPostCard) {
  const {owner, publishDate, image, text, id} = post
  const {firstName, lastName, title, picture} = owner;
  const name = `${title}. ${lastName} ${firstName}`;

  return (
    <article className={`post-card ${hideTop ? `post-card--top-hide` : ``}`}>
      <div className={`post-card__top ${hideTop ? `post-card__top--hide` : ``}`}>
        <Avatar className="post-card__avatar" src={picture}/>
        <div className="post-card__wrap">
          <h2 className="post-card__title">{name}</h2>
          <p className="post-card__date">{publishDate}</p>
        </div>
      </div>
      <img className="post-card__img" src={image} alt={id} />
      <p className="post-card__text">{text}</p>
    </article>
  );
}

PostCard.defaultProps = {
  hideTop: false,
};

export default React.memo(PostCard);
