import Link from 'next/link';
import CookieBanner from './CookieBanner';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CookieBanner />
        <header>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/art">Art</Link>
              <Link href="/cart">Cart</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
