import React from 'react';
import {useHistory} from 'react-router-dom';
import Modal from '../../components/modal/Modal';
import EditForm from '../../components/edit-form/EditForm';
import useAppSelector from '../../hooks/use-app-selector';
import {profileSelectors} from '../../store/profile';

function Edit() {
  const profile = useAppSelector(profileSelectors.getProfile);

  const history = useHistory();
  const handleModalClose = () => {
    const {pathname} = history.location;
    const newRout = pathname.substring(0, pathname.lastIndexOf('/'));
    history.push(newRout);
  };

  return (
    <Modal isOpen onClose={handleModalClose}>
      <EditForm user={profile} />
    </Modal>
  );
}

export default Edit;
