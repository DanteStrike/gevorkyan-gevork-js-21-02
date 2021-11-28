import React from 'react';
import './Modal.scss';
import {Alert} from "antd";

interface IModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  isError?: boolean;
  errMsg?: string | null;
}

function Modal({children, isOpen, onClose = () => {}, isError, errMsg}: IModalProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? `` : `modal--hide`}`.trim()}>
      <button type="button" className="modal__close" onClick={handleClose}>
        X
      </button>
      <div className="modal__content">{children}</div>
      {isError && <Alert message={errMsg} type="error" className="content-layout__error" closable />}
    </div>
  );
}

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
  errMsg: ``,
  isError: false,
};

export default Modal;
