import React from 'react';
import './styles.css';
import { CategoriesProps } from './interfaces';

export const Dropdown = ({
  categories,
  handleCloseDropdown,
  handleSelected,
  handleOpenDropdown,
  selected,
  openDropdown
}: CategoriesProps) => (
  <div className="dropdown" onBlur={handleCloseDropdown} tabIndex={0}>
    <div className="dropdown__header" onClick={handleOpenDropdown}>
      <span className="dropdown__selected">{selected ? selected : 'Categorías'}</span>
      <div className="dropdown__arrow-down"></div>
    </div>
    {openDropdown && (
      <div className="dropdown__content-item">
        {selected !== '' && (
          <div className="dropdown__item" onClick={() => handleSelected('')}>
            Categorías
          </div>
        )}

        {categories.map(({ title, remoteId }) => {
          return (
            <div className="dropdown__item" key={remoteId} onClick={() => handleSelected(title)}>
              {title}
            </div>
          );
        })}
      </div>
    )}
  </div>
);
