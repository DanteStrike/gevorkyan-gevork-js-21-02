import React from 'react';
import {List} from 'antd';
import PostCard from '../post-card/PostCard';

function PostsList() {
  return (
    <List
      dataSource={[1, 2, 3, 4, 5, 6]}
      renderItem={(el) => (
        <List.Item key={el}>
          <PostCard />
        </List.Item>
      )}
      grid={{
        gutter: 15,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      pagination={{}}
    />
  );
}

export default React.memo(PostsList);
