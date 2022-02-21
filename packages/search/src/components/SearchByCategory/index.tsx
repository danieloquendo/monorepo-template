import React, { FC, useReducer } from 'react';
import { Props } from './interfaces';
import { SearchCategory } from './SearchCategory';
import { SearchContext } from './context/SearchContext';
import { searchReducer } from './context/searchReducer';

const initialState = {
  optionSelected: ''
};

const SearchByCategory: FC<Props> = (props) => {
  const [searchState, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={{ searchState, dispatch }}>
      <SearchCategory {...props} />
    </SearchContext.Provider>
  );
};

export default SearchByCategory;
