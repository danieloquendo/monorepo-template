import type { FormEvent } from 'react';
import React, { forwardRef, useRef, useEffect, useCallback } from 'react';
import { Form, Input, Checkbox, LoadingButton, Label, Link } from '@faststore/ui';

import { validateEmail } from './FieldsValidator';
import ErrorMessage from './ErrorMessages';
import { useNewsletter } from './useNewsletter';
import { NewsletterProps } from './interfaces';

const initialErrors = {
  checkButton: '',
  email: '',
  alreadySubscribed: ''
};

const Newsletter = ({
  title,
  subtitle,
  submit,
  defaultErrorMessages,
  legalContent,
  useFecthNewsletter,
  onSubmit,
  ...otherProps
}: NewsletterProps) => {
  const { actualEmail, onEmail, isChecked, onCheck, errors, onSetErrors } = useNewsletter();

  const submitUser = useCallback(
    (id = '') => {
      if (actualEmail && isChecked) {
        useFecthNewsletter.addUser(actualEmail, id);
        window.sessionStorage.setItem('subscribedToNewsletter', JSON.stringify(actualEmail));
        useFecthNewsletter.reset();
      }

      onSubmit(actualEmail);
    },
    [actualEmail, useFecthNewsletter.addUser, isChecked, onSubmit, useFecthNewsletter.reset]
  );

  useEffect(() => {
    const tempErrorsSubscribeUser = {
      ...initialErrors
    };

    const userResultData = Object.values(useFecthNewsletter.userResult);
    const userResultDataLength = Object.values(useFecthNewsletter.userResult).length;

    if (!Object.prototype.hasOwnProperty.call(useFecthNewsletter.userResult, 'default')) {
      !userResultDataLength
        ? submitUser() // User doesn´t exist
        : !userResultData[0].isNewsletterOptIn
        ? submitUser(userResultData[0].id) // User exist but doesn´t suscribe
        : (tempErrorsSubscribeUser.alreadySubscribed = defaultErrorMessages.invalid.alreadySubscribed); // User exist and suscribe
      onSetErrors({ ...tempErrorsSubscribeUser });
    }
  }, [submitUser, useFecthNewsletter.userResult]);

  const emailInputRef = useRef<HTMLInputElement>(null);

  const validateFormInputs = (email: string) => {
    const tempErrors = {
      ...initialErrors
    };

    const isEmailValid = validateEmail(email);

    if (email === '') {
      tempErrors.email = defaultErrorMessages.empty.email;
    } else if (!isEmailValid) {
      tempErrors.email = defaultErrorMessages.invalid.email;
    }

    if (!isChecked) {
      tempErrors.checkButton = defaultErrorMessages.empty.checkButton;
    }

    onSetErrors({ ...tempErrors });

    return isEmailValid && isChecked;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const tempErrorSubmit = {
      ...initialErrors
    };

    const email: string = emailInputRef.current?.value.trim() ?? '';

    onEmail(email);
    const emailSessionStorage: string = JSON.parse(
      window.sessionStorage.getItem('subscribedToNewsletter') ?? '[]'
    );

    const areUserInputsValid: boolean = validateFormInputs(email);

    if (!areUserInputsValid) {
      return;
    }

    if (emailSessionStorage === email) {
      tempErrorSubmit.alreadySubscribed = defaultErrorMessages.invalid.alreadySubscribed;
    } else {
      useFecthNewsletter.searchUser(email);
    }

    onSetErrors({ ...tempErrorSubmit });
  };

  return (
    <section data-store-newsletter>
      <Form data-newsletter-form onSubmit={handleSubmit} {...otherProps}>
        <div data-newsletter-header>
          <p data-newsletter-title>{title}</p>

          {Boolean(subtitle) && <p data-newsletter-subtitle>{subtitle}</p>}
        </div>

        <div data-newsletter-controls>
          <Input
            id="newsletter-email"
            type="text"
            placeholder="Ingresa tu correo"
            name="newsletter-email"
            ref={emailInputRef}
          />
          <LoadingButton loading={useFecthNewsletter.loading} data-store-loading-button>
            {submit !== '' ? submit : 'Subscribe'}
          </LoadingButton>
        </div>
        <div data-newsletter-legals>
          <Checkbox onChange={(event) => onCheck(event.target.checked)} />
          <Label>
            <span>
              <p>
                {Object.values(legalContent).map(({ text, link }) => {
                  return (
                    <>
                      {text ? text : ' '}
                      {link ? (
                        <>
                          <Link
                            as="a"
                            title={link.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={link.url}
                          >
                            {link.text}
                          </Link>
                        </>
                      ) : (
                        ' '
                      )}
                    </>
                  );
                })}
              </p>
            </span>
          </Label>
        </div>
        <div data-newsletter-error-container>
          {useFecthNewsletter.error && <div>{defaultErrorMessages.error.message}</div>}
          {useFecthNewsletter.data && <div>{defaultErrorMessages.success.message}</div>}
          <ErrorMessage errors={errors} />
        </div>
      </Form>
    </section>
  );
};

export default forwardRef(Newsletter);
