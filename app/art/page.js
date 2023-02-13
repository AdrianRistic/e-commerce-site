import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { artPieces } from '../../database/artpieces';

export default function Art() {
  const cart = cookies().get('cart');

  let cartParsed = [];

  if (cart) {
    cartParsed = JSON.parse(cart.value);
  }

  const artPiecesWithquantity = artPieces.map((artPiece) => {
    const artPieceWithquantity = { ...artPiece, quantity: 0 };
    const artPieceinCoookie = cartParsed.find(
      (artPieceObject) => artPiece.id === artPieceObject.id,
    );

    if (artPieceinCoookie) {
      artPieceWithquantity.quantity = artPieceinCoookie.quantity;
    }
    return artPieceWithquantity;
  });

  return (
    <>
      <h1>Art</h1>
      <main>
        {artPiecesWithquantity.map((artPiece) => {
          return (
            <Fragment key={artPiece.id}>
              <Link href={`/art/${artPiece.name.toLocaleLowerCase()}`}>
                <h2 key={artPiece.id}>{artPiece.name}</h2>
              </Link>

              <Link href={`/art/${artPiece.name.toLocaleLowerCase()}`}>
                <Image
                  src={`/images/${artPiece.name}-${artPiece.id}.png`}
                  alt={artPiece.type}
                  width="200"
                  height="200"
                />
                <p>Price: {artPiece.price} </p>
              </Link>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}
