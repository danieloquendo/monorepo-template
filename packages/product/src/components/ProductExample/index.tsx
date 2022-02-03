import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const ProductExample: FC<Props> = () => {
  return <div>Product Example</div>;
};

export default ProductExample;
