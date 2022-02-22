import React from 'react';
import { DropdownProps } from './interfaces';
import { useDropdown } from './useDropdown';

export const Dropdown = ({ categories, defaultCategory = 'Categorías' }: DropdownProps) => {
  const { selected, openDropdown, handleOpenDropdown, handleCloseDropdown, handleSelected } = useDropdown();

  return (
    <div data-dropdown onBlur={handleCloseDropdown} tabIndex={0}>
      <div data-dropdown-header onClick={handleOpenDropdown}>
        <span data-dropdown-selected>{selected ? selected : defaultCategory}</span>
        <div data-dropdown-arrow-down></div>
      </div>
      {openDropdown && (
        <div data-dropdown-content-item>
          {selected !== '' && (
            <div data-dropdown-item onClick={() => handleSelected('')}>
              {defaultCategory}
            </div>
          )}

          {categories.map(({ title, remoteId }) => {
            return (
              <div data-dropdown-item key={remoteId} onClick={() => handleSelected(title)}>
                {title}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
