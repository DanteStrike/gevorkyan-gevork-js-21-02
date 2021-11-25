import React from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import PostsList from "../../components/posts-list/PostsList";

function Posts() {
  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок слушателей">
      <PostsList/>
    </ContentLayout>
  );
}

export default Posts;
