import type { ComponentPropsWithRef, FormEvent } from 'react';
import React, { forwardRef, useRef, useEffect, useCallback } from 'react';
import { Form, Label, Input, Checkbox, LoadingButton, Link } from '@faststore/ui';

import { validateEmail } from './FieldsValidator';
import ErrorMessage from './ErrorMessages';
import { useNewsletter } from './useNewsletter';

const defaultErrorMessages = {
  empty: {
    checkButton: 'Debes aceptar términos y condiciones para inscribirte y recibir ofertas exclusivas.',
    email: 'Se requiere el correo.'
  },
  invalid: {
    email: 'Debes ingresar un correo válido.',
    alreadySubscribed: 'Este correo ya está suscrito.'
  }
};

const initialErrors = {
  checkButton: '',
  email: '',
  alreadySubscribed: ''
};

export interface NewsletterProps extends Omit<ComponentPropsWithRef<'form'>, 'title' | 'onSubmit'> {
  title: string;
  subtitle?: string;
  submit?: string;
  onSubmit: (value: string) => void;
}

const Newsletter = forwardRef<HTMLFormElement, NewsletterProps>(
  // eslint-disable-next-line react/prop-types
  function Newsletter({ title, subtitle, submit, onSubmit, ...otherProps }, ref) {
    const {
      error,
      addUser,
      searchUser,
      userResult,
      loading,
      data,
      actualEmail,
      onEmail,
      isChecked,
      onCheck,
      errors,
      onSetErrors,
      reset
    } = useNewsletter();

    const submitUser = useCallback(
      (id = '') => {
        if (actualEmail && isChecked) {
          addUser({ email: actualEmail, id });
          window.sessionStorage.setItem('subscribedToNewsletter', JSON.stringify(actualEmail));
          reset();
        }

        onSubmit(actualEmail);
      },
      [actualEmail, addUser, isChecked, onSubmit, reset]
    );

    useEffect(() => {
      const tempErrorsSubscribeUser = {
        ...initialErrors
      };

      if (!Object.prototype.hasOwnProperty.call(userResult, 'default')) {
        if (!Object.values(userResult).length) {
          // User doesn´t exist
          submitUser();
        } else if (Object.values(userResult)[0].isNewsletterOptIn === false) {
          // User exist but doesn´t suscribe
          submitUser(Object.values(userResult)[0].id);
        } else {
          // User exist and suscribe
          tempErrorsSubscribeUser.alreadySubscribed = defaultErrorMessages.invalid.alreadySubscribed;

          onSetErrors({ ...tempErrorsSubscribeUser });
        }
      }
    }, [submitUser, userResult]);

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
        searchUser({ email });
      }

      onSetErrors({ ...tempErrorSubmit });
    };

    return (
      <section data-store-newsletter>
        <Form data-newsletter-form ref={ref} onSubmit={handleSubmit} {...otherProps}>
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
            <LoadingButton loading={loading} data-store-loading-button>
              {submit !== '' ? submit : 'Subscribe'}
            </LoadingButton>
          </div>
          <div data-newsletter-legals>
            <Checkbox onChange={(event) => onCheck(event.target.checked)} />
            <Label>
              <span>
                <p>
                  Acepto{' '}
                  <Link
                    as="a"
                    title="Términos y condiciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terminos-condiciones"
                  >
                    términos y condiciones
                  </Link>
                  ,{' '}
                  <Link
                    as="a"
                    title="Términos y condiciones marketplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terminos-de-marketplace"
                  >
                    términos y condiciones marketplace
                  </Link>{' '}
                  y autorizo el{' '}
                  <Link
                    as="a"
                    title="Tratamiento de mis datos personales"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/tratamiento-de-datos-personales"
                  >
                    tratamiento de mis datos personales con las siguientes condiciones.
                  </Link>
                </p>
              </span>
            </Label>
          </div>
          <div data-newsletter-error-container>
            {error && <div>Hubo un error</div>}
            {data && <div>E-mail registrado correctamente</div>}
            <ErrorMessage errors={errors} />
          </div>
        </Form>
      </section>
    );
  }
);

export default Newsletter;
