import type { ComponentPropsWithRef } from 'react';

export interface ErrorsProps {
  success: { message: string };
  error: { message: string };
  empty: Empty;
  invalid: Invalid;
}
export interface Empty {
  checkButton: string;
  email: string;
}
export interface Invalid {
  email: string;
  alreadySubscribed: string;
}

export interface LegalProps {
  text?: string;
  link?: Link;
}
interface Link {
  title: string;
  text: string;
  url: string;
}

export interface useFecthNewsletterProps {
  error: boolean;
  loading: boolean;
  data?: MDResponse;
  userResult: UserResult;
  addUser: (email: string, id?: string) => Promise<void>;
  searchUser: (email: string) => Promise<void>;
  reset: () => void;
  errors: Errors2;
}

type MDResponse = {
  Id: string;
  Href: string;
  DocumentId: string;
};
export interface UserResult {
  default: boolean;
}
export interface Errors2 {
  checkButton: string;
  email: string;
  alreadySubscribed: string;
}

export interface NewsletterProps extends Omit<ComponentPropsWithRef<'form'>, 'title' | 'onSubmit'> {
  title: string;
  subtitle?: string;
  submit?: string;
  defaultErrorMessages: ErrorsProps;
  legalContent: Array<LegalProps>;
  useFecthNewsletter: useFecthNewsletterProps;
  onSubmit: (value: string) => void;
}
