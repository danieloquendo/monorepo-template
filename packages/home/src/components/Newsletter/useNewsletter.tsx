import { useState } from 'react';

interface InitialErrors {
  checkButton: string;
  email: string;
  alreadySubscribed: string;
}

const initialErrors = {
  checkButton: '',
  email: '',
  alreadySubscribed: ''
};

export const useNewsletter = () => {
  const [actualEmail, setActualEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState(initialErrors);

  const onEmail = (email: string) => setActualEmail(email);
  const onCheck = (checkValue: boolean) => setIsChecked(checkValue);
  const onSetErrors = (errorsValue: InitialErrors) => setErrors(errorsValue);

  return {
    actualEmail,
    onEmail,
    isChecked,
    onCheck,
    errors,
    onSetErrors
  };
};
