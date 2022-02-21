import { createContext } from 'react';
import { SearchContextProps } from '../interfaces';

export const SearchContext = createContext<SearchContextProps>({} as SearchContextProps);
