import React, { FC } from 'react';

interface Props {
  fullName: string;
}

const NameInitials: FC<Props> = ({ fullName }) => {
  return (
    <div data-name-initials>
      <span data-name-initials-content>{getInitials(fullName)}</span>
    </div>
  );
};

const getInitials = (name: string) => {
  const hasTokens = name.indexOf(' ') !== -1;
  return name.substring(0, hasTokens ? 1 : 2) + (hasTokens ? name.charAt(name.lastIndexOf(' ') + 1) : '');
};

export default NameInitials;
