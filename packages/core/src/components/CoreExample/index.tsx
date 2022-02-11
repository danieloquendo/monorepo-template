import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  text: string;
}

const ExampleComponent: FC<Props> = (props: Props) => {
  return <div>{props.text} Core Example</div>;
};

export default ExampleComponent;
