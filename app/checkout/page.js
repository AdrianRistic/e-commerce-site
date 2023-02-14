'use client';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { artPieces } from '../../database/artpieces';

export default function checkOut() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartCookie = Cookies.get('cart');
    if (cartCookie) {
      setCart(JSON.parse(cartCookie));
    }
  }, []);

  const handleConfirmOrder = () => {
    const inputs = document.querySelectorAll('input');
    const allInputsFilled = Array.from(inputs).every((input) => input.value);

    if (!allInputsFilled) {
      alert('Please fill out all input fields before confirming the order.');
      return;
    }
  };

  const artPiecesWithquantity = artPieces.map((artPiece) => {
    const artPieceWithquantity = { ...artPiece, quantity: 0 };
    const artPieceinCoookie = cart.find(
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

  return (
    <>
      <h1>Checkout:</h1>

      <h2>Total: {totalPrice} </h2>

      <p>First Name:</p>
      <input></input>
      <p> Last Name:</p>
      <input></input>
      <p>E-Mail:</p>
      <input></input>
      <p>Adress:</p>
      <input></input>
      <p>City:</p>
      <input></input>
      <p>Postal Code:</p>
      <input></input>
      <p>Country:</p>
      <input></input>
      <p>Credit Card Number:</p>
      <input></input>
      <p>Credit Card Expiration Date:</p>
      <input></input>
      <p>Credit Card Security Code:</p>
      <input></input>

      <button onClick={handleConfirmOrder}>Confirm order</button>
    </>
  );
}
