import React, { FC } from 'react';
import { Item } from './Container';

const Item: FC<Item> = ({ image, key = '', tittle = '' }) => {
  return (
    <a data-buybycategory-link href={image?.href} key={key}>
      <div data-buybycategory-image-container>
        <img data-buybycategory-image alt={image?.alt} src={image?.source} />
      </div>
      <div data-buybycategory-link-tittle>{tittle}</div>
    </a>
  );
};

export default Item;
