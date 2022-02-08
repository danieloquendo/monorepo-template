import React, { HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const SearchByCategory = () => {
  return <div>Prueba</div>;
};

export default SearchByCategory;
