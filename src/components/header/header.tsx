import Image from "next/image"

import { Button } from "@/components/ui/button"

import { ActiveLink } from "@/components/active-link";
import Link from "next/link";

const Header = () => {

  return (
    <header className="w-full fixed z-50 top-0 border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">
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

          <nav className="flex items-center gap-6">
            <ActiveLink href={'/'}>
              Inicio
            </ActiveLink>
            <ActiveLink href={'/blog'}>
              Blog
            </ActiveLink> 

            <Button variant={'secondary'} asChild>
              <Link href={'/comecar'}>
                Começar
              </Link>
            </Button>
          </nav>
        </div>
      </div>

    </header>
  )
}

export { Header }