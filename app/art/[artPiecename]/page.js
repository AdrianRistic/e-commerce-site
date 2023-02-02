import { artPieces } from '../../../database/artpieces';

export const dynamic = 'force-dynamic';

export default function Arts(props) {
  const singleartPiece = artPieces.find((artPiece) => {
    return artPiece.name.toLowerCase() === props.params.artPiecename;
  });

  console.log(singleartPiece);

  return (
    <>
      <h1>{singleartPiece.name}</h1>

      <main>
        This is a {singleartPiece.type} in the {singleartPiece.style} - Style
      </main>
    </>
  );
}
