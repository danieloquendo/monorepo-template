import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const HomeExample: FC<Props> = () => {
  return <div>Home Exlample</div>;
};

export default HomeExample;
