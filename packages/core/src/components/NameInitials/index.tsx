import React, { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  fullName: string;
}

const getInitials = (name: string) => {
  const hasTokens = name.indexOf(' ') !== -1;
  return name.substring(0, hasTokens ? 1 : 2) + (hasTokens ? name.charAt(name.lastIndexOf(' ') + 1) : '');
};

const NameInitials = (props: Props) => {
  return (
    <div data-name-initials-content {...props}>
      {getInitials(props.fullName)}
    </div>
  );
};

export default NameInitials;
