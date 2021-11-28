import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import PostCard from "../../components/post-card/PostCard";
import useAppSelector from "../../hooks/use-app-selector";
import {postOperations, postSelectors} from "../../store/post";
import useAppDispatch from "../../hooks/use-app-dispatch";

interface IPostProps {
  id: string;
}

function Post({id}: IPostProps) {
  const commentsPerPage = 2;

  const dispatch = useAppDispatch();
  const post = useAppSelector(postSelectors.getPost);
  const page = useAppSelector(postSelectors.getPage);

  const history = useHistory();
  const handleModalClose = () => {
    const {pathname} = history.location;
    const newRout = pathname.substring(0, pathname.lastIndexOf('/'));
    history.push(newRout);
  };

  useEffect(() => {
    dispatch(postOperations.loadPost(id))
  }, [dispatch, id])

  useEffect(() => {
    dispatch(postOperations.loadComments(id, commentsPerPage, page))
  }, [dispatch, id, page])

  return (
    <Modal isOpen onClose={handleModalClose}>
      <PostCard post={post}/>
    </Modal>
  );
}

export default Post;
