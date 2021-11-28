import React, {useEffect} from 'react';
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import {postsActions, postsOperations, postsSelectors} from '../../store/posts';
import {IPostPreview} from '../../types';
import AppList from '../../components/app-list/AppList';
import PostCard from '../../components/post-card/PostCard';

function Posts() {
  const dispatch = useAppDispatch();
  const page = useAppSelector(postsSelectors.getPage);
  const total = useAppSelector(postsSelectors.getTotal);
  const posts = useAppSelector(postsSelectors.getData);
  const isLoading = useAppSelector(postsSelectors.getIsLoading);
  const itemPerPage = 6;

  useEffect(() => {
    dispatch(postsOperations.load(itemPerPage, page));
    return () => {
      dispatch(postsActions.requestAbort());
      dispatch(postsActions.resetList());
    };
  }, [dispatch, page]);

  const handlePaginationChange = (newPage: number) => {
    dispatch(postsActions.changePage(newPage));
  };

  return (
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок постов">
      <AppList
        current={page}
        total={total}
        dataSource={posts}
        onChange={handlePaginationChange}
        isLoading={isLoading}
        pageSize={itemPerPage}
        renderItem={(post: IPostPreview) => (
          <AppList.Item key={post.id} id={`posts-item-${post.id}`}>
            <PostCard post={post} />
          </AppList.Item>
        )}
      />
    </ContentLayout>
  );
}

export default Posts;
