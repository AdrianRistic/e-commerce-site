'use client';
import { getParsedCookie, setStringifiedCookie } from '@/utils/cookies';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const dynamic = 'force-dynamic';

export default function ArtPiece(props) {
  const router = useRouter();

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
      <button
        onClick={() => {
          const artPiecesinCookies = getParsedCookie('cart');

          if (!artPiecesinCookies) {
            setStringifiedCookie('cart', [
              { id: props.artPiece.id, quantity: 1 },
            ]);
            router.refresh();
            return;
          }

          const foundArt = artPiecesinCookies.find((artPieceInCookie) => {
            router.refresh();
            return artPieceInCookie.id === props.artPiece.id;
          });

          if (foundArt) {
            foundArt.quantity++;
          } else {
            artPiecesinCookies.push({ id: props.artPiece.id, quantity: 1 });
          }
          router.refresh();
          setStringifiedCookie('cart', artPiecesinCookies);
        }}
      >
        +⭐️
      </button>
      <button
        onClick={() => {
          const artPiecesinCookies = getParsedCookie('cart');

          if (!artPiecesinCookies) {
            router.refresh();
            return;
          }

          const foundArt = artPiecesinCookies.find((artPieceInCookie) => {
            router.refresh();
            return artPieceInCookie.id === props.artPiece.id;
          });

          if (foundArt) {
            foundArt.quantity--;

            if (foundArt.quantity < 0) {
              foundArt.quantity = 0;
            }
          } else {
            router.refresh();
            return;
          }

          setStringifiedCookie('cart', artPiecesinCookies);
        }}
      >
        -⭐️
      </button>
    </>
  );
}
