import Link from "next/link";

export default function Home() {
  
  return (
   <>
   <h1>Home Page</h1>
   <Link href={'/products'}>Products</Link>
   <Link href={'/account'}>Account</Link>
   </>
  );
}
