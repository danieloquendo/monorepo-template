import React from 'react';
import './styles.css';
import { useState } from 'react';
import { CategoriesProps } from './interfaces';

export const Dropdown = ({ categories }: CategoriesProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState('Todas las categorias');

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  const handleSelected = (e: any) => {
    setSelected(e.target.id);
    setOpenDropdown(false);
  };

  return (
    <div className="dropdown" onBlur={handleCloseDropdown} tabIndex={0}>
      <div className="dropdown__content" onClick={handleOpenDropdown}>
        <div className="dropdown__header">
          <span className="dropdown__selected"> {selected} </span>
          <div className="dropdown__arrow-down"></div>
        </div>
      </div>

      {openDropdown && (
        <div className="dropdown__content-item">
          {selected !== 'Todas las categorias' && (
            <div className="dropdown__item" id={'Todas las categorias'} onClick={handleSelected}>
              Todas las categorias
            </div>
          )}

          {categories.map(({ title, remoteId }) => {
            return (
              <div className="dropdown__item" key={remoteId} id={title} onClick={handleSelected}>
                {title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
