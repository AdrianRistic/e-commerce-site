import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artPieces } from '../../../database/artpieces';

export const dynamic = 'force-dynamic';

export default function Arts({ params }) {
  const singleartPiece = artPieces.find((artPiece) => {
    return artPiece.name.toLowerCase() === params.artPiecename;
  });

  console.log(singleartPiece);

  if (!singleartPiece) {
    throw new Error('This action goes against the rules, bud!');

    //notFound();
  }
  return (
    <>
      <h1>{singleartPiece.name}</h1>

      <main>
        This is a {singleartPiece.type} in the {singleartPiece.style} - Style
      </main>

      <Link href={`/art/${singleartPiece.name.toLocaleLowerCase()}`}>
        <Image
          src={`/images/${singleartPiece.name}-${singleartPiece.id}.png`}
          alt={singleartPiece.type}
          width="200"
          height="200"
        />
      </Link>
    </>
  );
}
