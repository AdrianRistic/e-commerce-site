'use client';

import { setStringifiedCookie } from '@/utils/cookies';

export default function RemoveButton(props) {
  // console.log(props.current.id);
  function handleClick() {
    const cookieArray = props.parsed;
    const deleteItem = cookieArray.filter((item) => {
      item.id !== props.current.id;
    });
    setStringifiedCookie('cart', deleteItem);
  }

  return (
    <>
      <button onClick={handleClick}> hello</button>
    </>
  );
}
