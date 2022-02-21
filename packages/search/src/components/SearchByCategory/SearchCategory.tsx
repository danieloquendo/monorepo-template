import React from 'react';
import { Dropdown } from './Dropdown';
import { Props } from './interfaces';
import { useSearchByCategory } from './useSearchByCategory';

export const SearchCategory = ({ categories, placeholder, submit }: Props) => {
  const hookSearch = useSearchByCategory({ categories, submit });
  const { cat, busqueda, setSearch, search } = hookSearch;

  return (
    <div className="searchByCategory-container">
      {cat.length > 1 && (
        <div className="searchByCategory">
          <Dropdown categories={cat} />
          <div className="searchByCategory__input-container">
            <form onSubmit={busqueda}>
              <input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => console.log('focus activo')}
              />
            </form>
            <div className="searchByCategory__btn-search" onClick={busqueda}>
              <i className="ei-search"> </i>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
