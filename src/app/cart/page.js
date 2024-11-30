'use client';

import { usePathname, useSearchParams } from "next/navigation";

const Cart = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    console.log(searchParams.get('search'))
    console.log(pathname)
  return (
    <div>Cart</div>
  )
}

export default Cart