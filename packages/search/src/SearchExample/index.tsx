import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const SearchExample: FC<Props> = () => {
  return <div>Product Example</div>;
};

export default SearchExample;
