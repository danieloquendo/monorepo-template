//import { ChangeEvent } from "react";

export interface CategoriesProps {
  categories: Categories[];
  selected?: string;
  openDropdown: boolean;
  handleOpenDropdown(): void;
  handleCloseDropdown(): void;
  handleSelected(option: string): void;
}
export interface UseCategoriesProps {
  categories: Array<{ node: { remoteId: string; slug: string; seo: { title: string } } }>;
  submit(term: string, categoria: string): void;
}

export interface Categories {
  title: string;
  remoteId: string;
}
