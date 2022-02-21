//import { ChangeEvent } from "react";

import { HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  categories: Array<{ node: { remoteId: string; slug: string; seo: { title: string } } }>;
  placeholder?: string;
  submit(term: string, categoria: string): void;
}

export interface DropdownProps {
  categories: Categories[];
}
export interface UseCategoriesProps {
  categories: Array<{ node: { remoteId: string; slug: string; seo: { title: string } } }>;
  submit(term: string, categoria: string): void;
}

export interface Categories {
  title: string;
  remoteId: string;
}

export interface SearchState {
  optionSelected: string;
}

export type SearchAction = { type: '[dropdown select] selected'; payload: SearchState };

export interface SearchContextProps {
  searchState: SearchState;
  dispatch: any;
  //dispatch: ({type, payload}:{type:string, payload:{optionSelected: string}} ) => void | {};
}
