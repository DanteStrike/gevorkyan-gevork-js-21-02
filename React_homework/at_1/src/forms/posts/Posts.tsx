import React, {useEffect} from 'react';
import {Tooltip} from "antd";
import ContentLayout, {ContentLayoutType} from '../../components/content-layout/ContentLayout';
import useAppDispatch from "../../hooks/use-app-dispatch";
import useAppSelector from "../../hooks/use-app-selector";
import {postsActions, postsOperations, postsSelectors} from "../../store/posts";
import {IPostPreview} from "../../types";
import AppList from "../../components/app-list/AppList";
import CustomLink from "../../components/custom-link/CustomLink";
import PostCard from "../../components/post-card/PostCard";

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
    <ContentLayout type={ContentLayoutType.FULL} hideTitle title="Спиок постов">
      <AppList
        current={page}
        total={total}
        dataSource={posts}
        onChange={handlePaginationChange}
        isLoading={isLoading}
        renderItem={(post: IPostPreview) => (
          <AppList.Item key={post.id} id={`posts-item-${post.id}`}>
            <Tooltip
              placement="topLeft"
              title={post.id}
              getPopupContainer={() => document.querySelector(`#posts-item-${post.id}`) || document.body}
            >
              <CustomLink to={`/posts/${post.id}`}>
                <PostCard post={post}/>
              </CustomLink>
            </Tooltip>
          </AppList.Item>
        )}
      />
    </ContentLayout>
  );
}

export default Posts;
