import React from 'react';

const sum = (a: number, b: number) => a + b;

const UiExample = () => {
  return <div onClick={() => sum(1, 2)}>UI Example</div>;
};

export { sum };
export default UiExample;
