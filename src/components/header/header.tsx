import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";

const Header = () => {

  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const isBlogPage = router.pathname === '/blog';

  return (
    <header className="w-full fixed z-50 top-0 border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">

        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              className="dark:invert"
              src="/logo.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
          </Link>

          <nav className="flex items-center gap-6">
            <Link href={'/'} className={cn('text-sm font-medium transition-colors hover:text-primary', isHomePage ? 'text-blue-500' : 'text-muted-foreground')}>
              Inicio
            </Link>
            <Link href={'/blog'} className={cn('text-sm font-medium transition-colors hover:text-primary', isBlogPage ? 'text-blue-500' : 'text-muted-foreground')}>
              Blog
            </Link>

            <Button variant={'secondary'}>
              Começar
            </Button>
          </nav>
        </div>
      </div>

    </header>
  )
}

export { Header }