import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const ExampleComponent: FC<Props> = () => {
  return <div>Core Example</div>;
};

export default ExampleComponent;
