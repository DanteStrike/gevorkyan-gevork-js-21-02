import React from 'react';
import {List, Tooltip} from 'antd';
import PostCard from '../post-card/PostCard';
import {IPostPreview} from "../../types";
import CustomLink from "../custom-link/CustomLink";

const listLayout = {
  gutter: 15,
  xs: 1,
  sm: 2,
  md: 2,
  lg: 3,
  xl: 3,
  xxl: 3,
};

interface IPostsListProps {
  posts: IPostPreview[];
  current: number;
  total: number;
  onChange: (page: number) => void;
  isLoading: boolean;
}

function PostsList({posts, current, total, onChange, isLoading}: IPostsListProps) {
  return (
    <List
      dataSource={posts}
      renderItem={(post) => (
        <List.Item key={post.id} id={`posts-item-${post.id}`}>
          <Tooltip
            placement="topLeft"
            title={post.id}
            getPopupContainer={() => document.querySelector(`#posts-item-${post.id}`) || document.body}
          >
            <CustomLink to={`/posts/${post.id}`}>
              <PostCard post={post}/>
            </CustomLink>
          </Tooltip>
        </List.Item>
      )}
      loading={isLoading}
      grid={listLayout}
      pagination={{
        defaultCurrent: 1,
        current,
        total,
        showSizeChanger: false,
        onChange,
        disabled: isLoading,
      }}
    />
  );
}

export default React.memo(PostsList);
