import React, { FC } from 'react';
import BuyByCategoryItem from './Item';

export interface Item {
  tittle: string;
  src: string;
  href: string;
  alt: string;
  key?: string;
}

export interface BuyByCategoryProps {
  allItems: Item[];
  tittle: string;
}

const Container: FC<BuyByCategoryProps> = ({ allItems, tittle = '' }) => {
  return (
    <div data-buybycategory-container>
      <div data-buybycategory-tittle>{tittle}</div>

      {allItems?.map((item: Item, index) => (
        <BuyByCategoryItem {...item} key={`buybycategoryitem-${index}`} />
      ))}
    </div>
  );
};

export default Container;
