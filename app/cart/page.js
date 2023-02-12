import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { artPieces } from '../../database/artpieces';

export default function cart() {
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
  //console.log(totalArtPieces);

  return (
    <>
      <h1>These Items are in your Cart</h1>
      <main>
        {filteredArtPieces.map((artPiece) => {
          return (
            <>
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
                  <p>quantity: {artPiece.quantity}</p>
                </Link>
              </Fragment>
            </>
          );
        })}
        <p>There are currently {totalArtPieces} items in your cart.</p>
        <p>Total:</p>
        <p>{totalPrice}</p>
        <Fragment>
          <Link href={`/checkout`}>
            <h2>Checkout➡️</h2>
          </Link>
        </Fragment>
      </main>
    </>
  );
}
