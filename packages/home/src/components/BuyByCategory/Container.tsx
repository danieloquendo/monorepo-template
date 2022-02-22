import React, { FC } from 'react';
import BuyByCategoryItem from './Item';

interface ItemImage {
  source: string;
  href: string;
  alt: string;
}

export interface Item {
  image: ItemImage;
  tittle: string;
  key: string;
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
        <BuyByCategoryItem image={item?.image} tittle={item?.tittle} key={`buybycategoryitem-${index}`} />
      ))}
    </div>
  );
};

export default Container;
