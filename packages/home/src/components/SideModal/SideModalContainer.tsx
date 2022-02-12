import React, { HTMLAttributes, ReactChild } from 'react';
import SideModal from './SideModal';
import useSideModal from './useSideModal';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  buttonText?: string;
  children?: ReactChild;
  iconButton: React.ReactNode;
  iconClose: React.ReactNode;
  iconHeader: React.ReactNode;
  modalTitle: string;
  orientation: 'end' | 'start' | 'center';
  isMobile?: boolean;
}

const SideModalContainer = (props: Props) => {
  const sideModal = useSideModal();
  return <SideModal {...sideModal} {...props} />;
};

export default SideModalContainer;
