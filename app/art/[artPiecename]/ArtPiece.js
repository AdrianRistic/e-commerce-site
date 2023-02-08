'use client';
import { getParsedCookie, setStringifiedCookie } from '@/utils/cookies';
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
      <button>-⭐️</button>
      <button
        onClick={() => {
          const artPiecesinCookies = getParsedCookie('artPiecesCookie');

          if (!artPiecesinCookies) {
            setStringifiedCookie('artPiecesCookie', [
              { id: props.artPiece.id, stars: 1 },
            ]);
            return;
          }

          const foundArt = artPiecesinCookies.find((artPieceInCookie) => {
            return artPieceInCookie.id === props.artPiece.id;
          });

          if (foundArt) {
            foundArt.stars++;
          } else {
            artPiecesinCookies.push({ id: props.artPiece.id, stars: 1 });
          }

          setStringifiedCookie('artPiecesCookie', artPiecesinCookies);
        }}
      >
        +⭐️
      </button>
    </>
  );
}
