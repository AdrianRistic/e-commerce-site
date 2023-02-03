'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const localStorageValue = JSON.parse(
    window.localStorage.getItem('areCookieTermsAccepted'),
  );

  const initialState = localStorageValue === null ? false : localStorageValue;

  const [areCookieTermsAccepted, setAreCookieTermsAccepted] =
    useState(initialState);
  return (
    !areCookieTermsAccepted && (
      <>
        <div>
          We use cookies on this site. Please accept the terms and conditions.
        </div>
        <button
          onClick={() => {
            setAreCookieTermsAccepted(true);
            window.localStorage.setItem(
              'areCookieTermsAccepted',
              JSON.stringify(true),
            );
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
