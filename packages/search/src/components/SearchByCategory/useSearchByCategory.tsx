import { FormEvent, useEffect, useState } from 'react';
import { Categories, UseCategoriesProps } from './interfaces';

export const useSearchByCategory = ({ categories, submit }: UseCategoriesProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selected, setSelected] = useState('');
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

  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  const handleSelected = (option: string) => {
    setSelected(option);
    setOpenDropdown(false);
  };

  const busqueda = (e?: FormEvent) => {
    e?.preventDefault();
    if (search.length > 0) {
      submit(search, selected);
    }
  };

  return {
    selected,
    cat,
    openDropdown,
    handleOpenDropdown,
    handleCloseDropdown,
    handleSelected,
    setSearch,
    busqueda,
    search
  };
};
