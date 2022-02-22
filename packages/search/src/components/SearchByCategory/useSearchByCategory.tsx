import { FormEvent, useContext, useEffect, useState } from 'react';
import { SearchContext } from './context/SearchContext';
import { Categories, UseCategoriesProps } from './interfaces';

export const useSearchByCategory = ({ categories, submit }: UseCategoriesProps) => {
  const { searchState } = useContext(SearchContext);
  const [cat, setCat] = useState<Categories[]>([
    {
      title: '',
      remoteId: ''
    }
  ]);
  const [search, setSearch] = useState('');
  const [openAutoComplete, setOpenAutoComplete] = useState(false);

  useEffect(() => {
    const cat = categories.map(({ node }) => {
      return { title: node.seo.title, remoteId: node.remoteId };
    });
    setCat(cat);
  }, []);

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    const { optionSelected } = searchState;
    if (search.length > 0) {
      submit(search, optionSelected);
    }
  };

  return {
    cat,
    setSearch,
    submitSearch,
    search,
    openAutoComplete,
    setOpenAutoComplete
  };
};
