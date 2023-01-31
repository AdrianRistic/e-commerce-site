import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/art">Art</Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
