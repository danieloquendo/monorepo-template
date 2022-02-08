import React, { FC } from 'react';
import { Modal, Button } from '@faststore/ui';
import { Icon } from '@faststore/ui';

interface Props {
  buttonText?: string;
  iconButton: React.ReactNode;
  iconClose: React.ReactNode;
  iconHeader: React.ReactNode;
  isOpen: boolean;
  modalTitle: string;
  handleClose: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

const SideModal: FC<Props> = ({
  isOpen,
  handleClose,
  setIsOpen,
  modalTitle,
  children,
  iconHeader,
  iconClose,
  iconButton,
  buttonText
}) => {
  return (
    <>
      <Button data-store-modal-button onClick={() => setIsOpen(!isOpen)}>
        <Icon component={iconButton} />
        <p>{buttonText}</p>
      </Button>
      <Modal isOpen={isOpen} onDismiss={handleClose}>
        <div data-store-modal-content-header>
          <div data-store-modal-content-title>
            <Icon component={iconHeader} />
            <p>{modalTitle}</p>
          </div>
          <div data-store-modal-content-button>
            <Icon onClick={handleClose} component={iconClose} />
          </div>
        </div>
        <div data-action-container>
          <div data-action-container-content>{children}</div>
        </div>
      </Modal>
    </>
  );
};

export default SideModal;
