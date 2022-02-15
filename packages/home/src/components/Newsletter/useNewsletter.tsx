import { useCallback, useState } from 'react';

type MDResponse = {
  Id: string;
  Href: string;
  DocumentId: string;
};

interface SearchResponse {
  id?: string;
  email?: string;
  isNewsletterOptIn?: boolean;
}

interface Default {
  default: boolean;
}

const addToNewsletter = async (data: { email: string; id: string }) =>
  fetch('/api/dataentities/NS/documents/', {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/vnd.vtex.ds.v10+json'
    },
    method: 'PATCH',
    body: JSON.stringify({ ...data, isNewsletterOptIn: true })
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error();
  });

const searchEmailNewsletter = async (data: { email: string }) =>
  fetch(`/api/dataentities/NS/search?_fields=email,isNewsletterOptIn,id&_where=email=${data.email}`, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/vnd.vtex.ds.v10+json'
    },
    method: 'GET'
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error();
  });

export const useNewsletter = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<MDResponse | null>(null);
  const [error, setError] = useState(false);
  const [userResult, setUserResult] = useState<SearchResponse | Default>({
    default: true
  } as Default);

  const addUser = useCallback(
    (user: { email: string; id: string }) => {
      setError(false);
      setData(null);
      setLoading(true);

      return addToNewsletter(user)
        .then((response) => {
          setData(response as MDResponse);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setError, setData, setLoading]
  );

  const searchUser = useCallback(
    (user: { email: string }) => {
      setError(false);
      setUserResult({
        default: true
      } as Default);
      setLoading(true);

      return searchEmailNewsletter(user)
        .then((response) => {
          setUserResult(response as SearchResponse);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setError, setUserResult, setLoading]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(false);
    setLoading(false);
    setUserResult({
      default: true
    } as Default);
  }, []);

  return {
    error,
    addUser,
    searchUser,
    loading,
    data,
    userResult,
    reset
  };
};
