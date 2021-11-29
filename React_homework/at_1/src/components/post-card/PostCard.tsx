import React from 'react';
import './PostCard.scss';
import {Tooltip} from 'antd';
import {IPostPreview} from '../../types';
import LinkedAvatar from '../linked-avatar/LinkedAvatar';
import CustomLink from '../custom-link/CustomLink';
import Loading from '../loading/Loading';
import {DateUtils} from '../../utils';

interface IPostCard {
  post: IPostPreview;
  hideTop?: boolean;
  modal?: boolean;
  renderComments?: () => React.ReactNode;
  isLoading?: boolean;
}

function PostCard({hideTop = false, post, modal, renderComments, isLoading = false}: IPostCard) {
  const {owner, publishDate, image, text, id} = post;
  const {firstName, lastName, title} = owner;
  const name = `${title ? `${title}. ` : ``}${lastName} ${firstName}`;
  const profileRoute = `/profile/${owner.id}`;

  return (
    <article className={`post-card ${hideTop ? `post-card--top-hide` : ``} ${modal ? `post-card--modal` : ``}`}>
      <Loading isLoading={isLoading} />
      <div className={`post-card__top ${hideTop ? `post-card__top--hide` : ``}`}>
        <LinkedAvatar user={owner} className="post-card__avatar" to={profileRoute} />
        <div className="post-card__wrap">
          <Tooltip
            placement="topLeft"
            title={post.id}
            getPopupContainer={() => document.querySelector(`#posts-item-${post.id}`) || document.body}
          >
            <CustomLink to={profileRoute}>
              <h2 className="post-card__title">{name}</h2>
            </CustomLink>
          </Tooltip>
          <p className="post-card__date">{DateUtils.normalizeCardDate(publishDate)}</p>
        </div>
      </div>
      <CustomLink className="post-card__main" to={hideTop ? `${profileRoute}/${post.id}` : `/posts/${post.id}`}>
        <img className="post-card__img" src={image} alt={id} />
        <p className="post-card__text">{text}</p>
      </CustomLink>
      <div className="post-card__comments">{modal && renderComments && renderComments()}</div>
    </article>
  );
}

PostCard.defaultProps = {
  hideTop: false,
  modal: false,
  renderComments: () => {},
  isLoading: false,
};

export default React.memo(PostCard);
