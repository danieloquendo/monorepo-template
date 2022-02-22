import React from 'react';
import { Dropdown } from './Dropdown';
import { Props } from './interfaces';
import { useSearchByCategory } from './useSearchByCategory';

export const SearchCategory = ({ categories, placeholder, submit, lengthCategories = 1 }: Props) => {
  const { cat, submitSearch, setSearch, search, openAutoComplete, setOpenAutoComplete } = useSearchByCategory(
    { categories, submit }
  );

  return (
    <div data-searchByCategory-container>
      {cat.length > lengthCategories && (
        <div data-searchByCategory>
          <Dropdown categories={cat} />
          <div data-searchByCategory-input-container>
            <form data-SearchByCategory-form onSubmit={submitSearch}>
              <input
                data-searchByCategory-input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setOpenAutoComplete(true)}
                onBlur={() => setOpenAutoComplete(false)}
              />
            </form>
            <div
              data-searchByCategory-btn-search
              data-searchByCategory-btn-autocomplete={openAutoComplete}
              onClick={submitSearch}
            >
              <i className="ei-search"> </i>
            </div>
          </div>
        </div>
      )}
      {openAutoComplete && <section data-searchByCategory-autoComplete></section>}
    </div>
  );
};
