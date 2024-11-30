import { redirect } from 'next/navigation';
import React from 'react'

const Account = () => {
    const userProfile = null;
  if (userProfile === null) redirect('cart?search=product1')
    return   <div>
  <h1>Account Page</h1>

</div>
}

export default Account