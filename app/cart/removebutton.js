'use client';

import { setStringifiedCookie } from '@/utils/cookies';
import { useRouter } from 'next/navigation';

export default function RemoveButton(props) {
  // console.log(props.current.id);
  const router = useRouter();
  function handleClick() {
    const cookieArray = props.parsed;
    const deleteItem = cookieArray.filter((item) => {
      item.id !== props.current.id;
    });
    setStringifiedCookie('cart', deleteItem);
    router.refresh();
  }

  return (
    <>
      <button onClick={handleClick}>Remove Item</button>
    </>
  );
}
