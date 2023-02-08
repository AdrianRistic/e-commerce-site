'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const dynamic = 'force-dynamic';

export default function ArtPiece(props) {
  return (
    <>
      <h1>{props.artPiece.name}</h1>

      <main>
        This is a {props.artPiece.type} in the {props.artPiece.style} - Style
      </main>

      <Link href={`/art/${props.artPiece.name.toLocaleLowerCase()}`}>
        <Image
          src={`/images/${props.artPiece.name}-${props.artPiece.id}.png`}
          alt={props.artPiece.type}
          width="200"
          height="200"
        />
      </Link>
    </>
  );
}
