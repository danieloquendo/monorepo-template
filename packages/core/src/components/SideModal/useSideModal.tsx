import { useEffect, useState } from 'react';

const useSideModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen && document.body) {
      document.body.style.paddingRight = `${window?.innerWidth - document?.body?.offsetWidth}px`;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [isOpen]);

  return {
    isOpen,
    handleClose,
    setIsOpen
  };
};

export default useSideModal;
