import { useContext, useState } from 'react';
import { SearchContext } from './context/SearchContext';

export const useDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState('');
  const { dispatch } = useContext(SearchContext);

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  const handleSelected = (option: string) => {
    setSelected(option);
    dispatch({
      type: '[dropdown select] selected',
      payload: {
        optionSelected: option
      }
    });
    setOpenDropdown(false);
  };

  return { selected, openDropdown, handleOpenDropdown, handleCloseDropdown, handleSelected };
};
