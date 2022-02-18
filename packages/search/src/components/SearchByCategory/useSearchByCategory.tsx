import { FormEvent, useEffect, useState } from 'react';
import { Categories, UseCategoriesProps } from './interfaces';
import { useDropdown } from './useDropdown';

export const useSearchByCategory = ({ categories, submit }: UseCategoriesProps) => {
  const { selected } = useDropdown();
  const [cat, setCat] = useState<Categories[]>([
    {
      title: '',
      remoteId: ''
    }
  ]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const cat = categories.map(({ node }) => {
      return { title: node.seo.title, remoteId: node.remoteId };
    });
    setCat(cat);
  }, []);

  const busqueda = (e: FormEvent) => {
    e.preventDefault();
    if (search.length > 0) {
      submit(search, selected);
    }
  };

  return {
    cat,
    setSearch,
    busqueda,
    search
  };
};
