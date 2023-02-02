'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      Sorry, bud! Seems like there was some error.
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
