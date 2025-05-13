import Link from "next/link";
import Image from 'next/image';
const Logo = () => {
  return (
<>
       <Link href="/">
            <Image
              className=""
              src="/logo.svg"
              alt="Next.js logo"
              width={116}
              height={32}
              priority
            />
          </Link>

</>
  );
}

export { Logo }