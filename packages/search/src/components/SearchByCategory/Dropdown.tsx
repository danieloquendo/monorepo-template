import React from 'react';
import { DropdownProps } from './interfaces';
import { useDropdown } from './useDropdown';

export const Dropdown = ({ categories }: DropdownProps) => {
  const { handleCloseDropdown, handleOpenDropdown, selected, handleSelected, openDropdown } = useDropdown();

  return (
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
};
