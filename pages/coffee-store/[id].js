import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <div>CoffeeStore{router.query.id}</div>
      <Link href='/'>
        Back to home
      </Link>
    </>
  )
}

export default CoffeeStore