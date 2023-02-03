'use client';
import { useState } from 'react';

export default function CookieBanner() {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(true);
  return (
    isCookieBannerVisible && (
      <>
        <div>
          We use cookies on this site. Please accept the terms and conditions.
        </div>
        <button onClick={() => setIsCookieBannerVisible(false)}>Accept</button>
      </>
    )
  );
}
