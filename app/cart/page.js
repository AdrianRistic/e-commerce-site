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

  const artPiecesWithStars = artPieces.map((artPiece) => {
    const artPieceWithStars = { ...artPiece, stars: 0 };
    const artPieceinCoookie = artPiecesCookieParsed.find(
      (artPieceObject) => artPiece.id === artPieceObject.id,
    );

    if (artPieceinCoookie) {
      artPieceWithStars.stars = artPieceinCoookie.stars;
    }
    return artPieceWithStars;
  });
  //console.log(artPiecesWithStars);
  const filteredItems = artPiecesWithStars.filter(
    (artPieceWithStars) => artPieceWithStars.stars > 0,
  );
  console.log(filteredItems);

  return (
    <>
      <h1>These Items are in your Cart</h1>
      <main>
        {filteredItems.map((artPiece) => {
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
                <p>stars: {artPiece.stars}</p>
              </Link>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}
