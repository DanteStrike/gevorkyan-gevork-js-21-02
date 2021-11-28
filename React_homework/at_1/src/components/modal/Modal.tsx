import React from 'react';
import './Modal.scss';

interface IModalProps {
  isOpen?: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

function Modal({children, isOpen, onClose = () => {}}: IModalProps) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? `` : `modal--hide`}`.trim()}>
      <button type="button" className="modal__close" onClick={handleClose}>
        X
      </button>
      <div className="modal__content">{children}</div>
    </div>
  );
}

Modal.defaultProps = {
  isOpen: false,
  onClose: () => {},
};

export default Modal;
