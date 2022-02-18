//import { ChangeEvent } from "react";

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
