import React, { FC } from 'react';
import { Item } from './Container';

const Item: FC<Item> = ({ href = '', alt = '', src = '', key = '', tittle = '' }) => {
  return (
    <a data-buybycategory-link href={href} key={key}>
      <div data-buybycategory-image-container>
        <img data-buybycategory-image alt={alt} src={src} />
      </div>
      <div data-buybycategory-link-tittle>{tittle}</div>
    </a>
  );
};

export default Item;
