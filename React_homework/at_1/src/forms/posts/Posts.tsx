import React, {useEffect} from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import PostsList from '../../components/posts-list/PostsList';
import useAppDispatch from "../../hooks/use-app-dispatch";
import useAppSelector from "../../hooks/use-app-selector";
import {postsActions, postsOperations, postsSelectors} from "../../store/posts";

function Posts() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(postsSelectors.getPage);
  const total = useAppSelector(postsSelectors.getTotal);
  const posts = useAppSelector(postsSelectors.getData);
  const isLoading = useAppSelector(postsSelectors.getIsLoading);

  useEffect(() => {
    dispatch(postsOperations.load(6, page));
  }, [dispatch, page]);

  const handlePaginationChange = (newPage: number) => {
    dispatch(postsActions.changePage(newPage));
  };

  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок слушателей">
      <PostsList current={page} total={total} posts={posts} onChange={handlePaginationChange} isLoading={isLoading}/>
    </ContentLayout>
  );
}

export default Posts;
