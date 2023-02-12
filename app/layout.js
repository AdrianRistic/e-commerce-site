import './global.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { artPieces } from '../database/artpieces';
import CookieBanner from './CookieBanner';

export default function RootLayout({ children, props }) {
  const artPiecesCookie = cookies().get('artPiecesCookie');

  let artPiecesCookieParsed = [];

  if (artPiecesCookie) {
    artPiecesCookieParsed = JSON.parse(artPiecesCookie.value);
  }

  const artPiecesWithquantity = artPieces.map((artPiece) => {
    const artPieceWithquantity = { ...artPiece, quantity: 0 };
    const artPieceinCoookie = artPiecesCookieParsed.find(
      (artPieceObject) => artPiece.id === artPieceObject.id,
    );

    if (artPieceinCoookie) {
      artPieceWithquantity.quantity = artPieceinCoookie.quantity;
    }
    return artPieceWithquantity;
  });

  const filteredArtPieces = artPiecesWithquantity.filter(
    (artPieceWithquantity) => artPieceWithquantity.quantity > 0,
  );

  const totalPrice = filteredArtPieces.reduce(
    (acc, piece) => acc + parseFloat(piece.price * piece.quantity),
    0,
  );

  const totalArtPieces = filteredArtPieces.reduce(
    (acc, piece) => acc + piece.quantity,
    0,
  );

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
              <Link href="/cart">Cart {totalArtPieces}</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
