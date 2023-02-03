'use client';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [areCookieTermsAccepted, setAreCookieTermsAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookieTermsAccepted');

    const initialState =
      localStorageValue === undefined ? false : localStorageValue;

    setAreCookieTermsAccepted(initialState);
  }, []);

  return (
    !areCookieTermsAccepted && (
      <>
        <div>
          We use cookies on this site. Please accept the terms and conditions.
        </div>
        <button
          onClick={() => {
            setAreCookieTermsAccepted(true);
            setLocalStorage('areCookieTermsAccepted', true);
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
