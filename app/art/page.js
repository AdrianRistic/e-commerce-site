import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { artPieces } from '../../database/artpieces';

export default function Art() {
  return (
    <>
      <h1>Art</h1>
      <main>
        {artPieces.map((artPiece) => {
          console.log(artPiece);

          return (
            <Fragment key={artPiece.id}>
              <Link href={`/artpieces/${artPiece.name.toLocaleLowerCase()}`}>
                <h2 key={artPiece.id}>{artPiece.name}</h2>
              </Link>

              <Link href={`/artpieces/${artPiece.name.toLocaleLowerCase()}`}>
                <Image
                  src={`/images/${artPiece.name}-${artPiece.id}.png`}
                  alt={artPiece.type}
                  width="200"
                  height="200"
                />
              </Link>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}
