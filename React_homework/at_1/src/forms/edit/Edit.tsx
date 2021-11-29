import React from 'react';
import {useHistory} from "react-router-dom";
import Modal from "../../components/modal/Modal";
import EditForm from "../../components/edit-form/EditForm";

interface IEditProps {
  id: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Edit({id}: IEditProps) {
  const history = useHistory();
  const handleModalClose = () => {
    const {pathname} = history.location;
    const newRout = pathname.substring(0, pathname.lastIndexOf('/'));
    history.push(newRout);
  };

  return (
    <Modal isOpen onClose={handleModalClose}>
      <EditForm/>
    </Modal>
  );
};

export default Edit;
