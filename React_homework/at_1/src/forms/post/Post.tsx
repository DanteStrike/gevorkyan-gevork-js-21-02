import React from 'react';
import {useHistory} from 'react-router-dom';
import Modal from '../../components/modal/Modal';

interface IPostProps {
  id: string;
}

function Post({id}: IPostProps) {
  const history = useHistory();
  const handleModalClose = () => {
    const {pathname} = history.location;
    const newRout = pathname.substring(0, pathname.lastIndexOf('/'));
    history.push(newRout);
  };

  return (
    <Modal isOpen onClose={handleModalClose}>
      <div style={{width: `300px`, height: `300px`, backgroundColor: `red`}}>{id}</div>
    </Modal>
  );
}

export default Post;
