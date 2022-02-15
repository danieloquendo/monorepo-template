import React from 'react';
import { List } from '@faststore/ui';

interface Props {
  errors: InputValues;
}

type InputValues = {
  email: string;
  checkButton: string;
  alreadySubscribed: string;
};

const ErrorMessage = ({ errors: { email, checkButton, alreadySubscribed } }: Props) => {
  if (checkButton === '' && email === '' && alreadySubscribed === '') {
    return null;
  }

  return (
    <List variant="unordered">
      {email !== '' ? <li>{email}</li> : ''}
      {checkButton !== '' ? <li>{checkButton}</li> : ''}
      {alreadySubscribed !== '' ? <li>{alreadySubscribed}</li> : ''}
    </List>
  );
};

export default ErrorMessage;
