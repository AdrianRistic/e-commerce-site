import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artPieces } from '../../../database/artpieces';
import ArtPiece from './artPiece';

export const dynamic = 'force-dynamic';

export default function Arts({ params }) {
  const singleartPiece = artPieces.find((artPiece) => {
    return artPiece.name.toLowerCase() === params.artPiecename;
  });

  if (!singleartPiece) {
    throw new Error('This action goes against the rules, bud!');

    //notFound();
  }
  return <ArtPiece artPiece={singleartPiece} />;
}
