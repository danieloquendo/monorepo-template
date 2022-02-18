import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Dropdown } from './Dropdown';
import { useSearchByCategory } from './useSearchByCategory';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  categories: Array<{ node: { remoteId: string; slug: string; seo: { title: string } } }>;
  placeholder?: string;
  submit(term: string, categoria: string): void;
}

const SearchByCategory: FC<Props> = ({ categories, placeholder, submit }) => {
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

export default SearchByCategory;
