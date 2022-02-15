import React, { FC, HTMLAttributes, ReactChild, useEffect, useState } from 'react';
import { Dropdown } from './Dropdown';
import { Categories } from './interfaces';
import './styles.css';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  categories: Array<{ node: { remoteId: string; slug: string; seo: { title: string } } }>;
  placeholder?: string;
  submit(term: string): void;
}

const SearchByCategory: FC<Props> = ({ categories, placeholder, submit }) => {
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

  const busqueda = (e: any) => {
    e.preventDefault();
    submit(search);
  };

  return (
    <div className="searchByCategory-container">
      <div className="searchByCategory">
        {cat.length > 1 && <Dropdown categories={cat} />}
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
      {/* <div> Focus active </div> */}
    </div>
  );
};

export default SearchByCategory;
