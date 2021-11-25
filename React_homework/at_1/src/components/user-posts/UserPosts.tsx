import React from 'react';
import {List} from 'antd';
import PostCard from '../post-card/PostCard';

function UserPosts() {
  return (
    <List
      dataSource={[1, 2, 3]}
      renderItem={(el) => (
        <List.Item key={el}>
          <PostCard hideTop />
        </List.Item>
      )}
      grid={{
        gutter: 15,
        xs: 1,
        sm: 1,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
      }}
      pagination={{}}
    />
  );
}

export default React.memo(UserPosts);
