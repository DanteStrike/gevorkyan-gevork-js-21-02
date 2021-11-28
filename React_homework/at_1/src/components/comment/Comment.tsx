import React from 'react';
import {IComment} from '../../types';
import LinkedAvatar from '../linked-avatar/LinkedAvatar';
import CustomLink from '../custom-link/CustomLink';
import './Comment.scss';

interface ICommentProps {
  comment: IComment;
}

function Comment({comment}: ICommentProps) {
  const {owner, publishDate, message} = comment;
  const {firstName, lastName, title} = owner;
  const name = `${title ? `${title} .` : ``}${lastName} ${firstName}`;
  const profileRoute = `/profile/${owner.id}`;

  return (
    <article className="comment">
      <div className="comment__top">
        <LinkedAvatar user={owner} className="comment__avatar" to={profileRoute} />
        <div className="comment__wrap">
          <CustomLink to={profileRoute}>
            <h2 className="comment__title">{name}</h2>
          </CustomLink>
          <p className="comment__date">{publishDate}</p>
        </div>
      </div>
      <p className="comment__text">{message}</p>
    </article>
  );
}

export default Comment;
