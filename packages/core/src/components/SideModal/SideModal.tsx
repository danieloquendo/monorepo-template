import React, { FC } from 'react';
import { Modal, Button } from '@faststore/ui';
import { Icon } from '@faststore/ui';
import { Props as ContainerProps } from './SideModalContainer';

interface Props extends ContainerProps {
  isOpen: boolean;
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
  buttonText,
  className,
  orientation
}) => {
  return (
    <>
      <Button data-store-modal-button onClick={() => setIsOpen(!isOpen)}>
        <Icon component={iconButton} />
        <p>{buttonText}</p>
      </Button>
      <Modal isOpen={isOpen} onDismiss={handleClose} className={className} style={{ alignSelf: orientation }}>
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
