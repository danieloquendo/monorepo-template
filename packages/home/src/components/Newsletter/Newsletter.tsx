import type { ComponentPropsWithRef, FormEvent, ReactNode } from 'react';
import React, { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import { Form, Label, Input, Button, Checkbox, LoadingButton, Link } from '@faststore/ui';

import { validateEmail } from './FieldsValidator';
import ErrorMessage from './ErrorMessages';
import { useNewsletter } from './useNewsletter';

const errorMessages = {
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
  title: ReactNode;
  subtitle?: ReactNode;
  onSubmit: (value: string) => void;
}

const Newsletter = forwardRef<HTMLFormElement, NewsletterProps>(
  // eslint-disable-next-line react/prop-types
  function Newsletter({ title, subtitle, onSubmit, ...otherProps }, ref) {
    const [errors, setErrors] = useState(initialErrors);
    const [isChecked, setIsChecked] = useState(false);
    const [actualEmail, setActualEmail] = useState('');
    const { error, addUser, searchUser, userResult, loading, data, reset } = useNewsletter();

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
          tempErrorsSubscribeUser.alreadySubscribed = errorMessages.invalid.alreadySubscribed;

          setErrors({ ...tempErrorsSubscribeUser });
        }
      }
    }, [submitUser, userResult]);

    const emailInputRef = useRef<HTMLInputElement>(null);

    const onChangeCheckButton = (value: boolean) => {
      setIsChecked(value);
    };

    const validateFormInputs = (email: string) => {
      const tempErrors = {
        ...initialErrors
      };

      const isEmailValid = validateEmail(email);

      if (email === '') {
        tempErrors.email = errorMessages.empty.email;
      } else if (!isEmailValid) {
        tempErrors.email = errorMessages.invalid.email;
      }

      if (!isChecked) {
        tempErrors.checkButton = errorMessages.empty.checkButton;
      }

      setErrors({ ...tempErrors });

      return isEmailValid && isChecked;
    };

    const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      const tempErrorSubmit = {
        ...initialErrors
      };

      const email: string = emailInputRef.current?.value.trim() ?? '';

      setActualEmail(email);
      const emailSessionStorage: string = JSON.parse(
        window.sessionStorage.getItem('subscribedToNewsletter') ?? '[]'
      );

      const areUserInputsValid: boolean = validateFormInputs(email);

      if (!areUserInputsValid) {
        return;
      }

      if (emailSessionStorage === email) {
        tempErrorSubmit.alreadySubscribed = errorMessages.invalid.alreadySubscribed;
      } else {
        searchUser({ email });
      }

      setErrors({ ...tempErrorSubmit });
    };

    return (
      <section data-store-newsletter>
        <Form data-newsletter-form ref={ref} onSubmit={handleSubmit} {...otherProps}>
          <div data-newsletter-header>
            {title}
            {Boolean(subtitle) && subtitle}
          </div>

          <div data-newsletter-controls>
            <Input
              id="newsletter-email"
              type="text"
              placeholder="Ingresa tu correo"
              name="newsletter-email"
              ref={emailInputRef}
            />
            {loading ? (
              <LoadingButton loading data-store-loading-button>
                Loading Button
              </LoadingButton>
            ) : (
              <Button type="submit" data-store-button>
                Suscríbete
              </Button>
            )}
          </div>
          <div>
            <Label>
              <Checkbox onChange={(event) => onChangeCheckButton(event.target.checked)} />
            </Label>
            <Label>
              <span>
                <p>
                  Acepto
                  <Link
                    as="a"
                    title="Términos y condiciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terminos-condiciones"
                  >
                    términos y condiciones
                  </Link>
                  ,
                  <Link
                    as="a"
                    title="Términos y condiciones marketplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/terminos-de-marketplace"
                  >
                    términos y condiciones marketplace
                  </Link>
                  y autorizo el
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
          <div>
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
