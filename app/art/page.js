import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const artPieces = [
  { id: 1, name: 'These Days', type: 'painting', style: 'reneissance' },
  { id: 2, name: 'The Launch', type: 'painting', style: 'impressionism' },
  { id: 3, name: 'Powerlaunch', type: 'painting', style: 'impressionism' },
  { id: 4, name: 'It got white Spots', type: 'painting', style: 'surrealism' },
  { id: 5, name: 'New Frontiers', type: 'painting', style: 'surrealism' },
];

export default function Art() {
  return (
    <>
      <h1>Art</h1>
      <main>
        {artPieces.map((artPiece) => {
          console.log(artPiece);

          return (
            <Fragment key={artPiece.id}>
              <Image
                src={`/images/${artPiece.name}-${artPiece.id}.png`}
                alt={artPiece.type}
                width="200"
                height="200"
              />

              <h2 key={artPiece.id}>{artPiece.name}</h2>
            </Fragment>
          );
        })}
      </main>
    </>
  );
}
