import { useState } from 'react';

export const useDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState('');

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  const handleSelected = (option: string) => {
    setSelected(option);
    setOpenDropdown(false);
  };

  return {
    openDropdown,
    handleOpenDropdown,
    handleCloseDropdown,
    handleSelected,
    selected
  };
};
