import React from 'react';
import { Button, Link } from '@faststore/ui';
import { X as CloseIcon } from 'phosphor-react';

interface ICategoryMenuHeader {
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}
const CategoryMenuHeader: React.FC<ICategoryMenuHeader> = ({ onClose }) => {
  const handleClose: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (onClose) onClose(event);
  };
  return (
    <div data-category-menu-header aria-label="header">
      <Link href="/" as="a">
        <svg data-category-menu-header-logo>
          <image xlinkHref="https://vtex-resources.s3.amazonaws.com/images/exito.svg" />
        </svg>
      </Link>
      <Button
        id="close-category-menu"
        data-category-menu-close-button
        aria-label="Close Menu"
        onClick={handleClose}
      >
        <CloseIcon size={32} />
      </Button>
    </div>
  );
};

export default CategoryMenuHeader;
