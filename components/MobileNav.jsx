"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/resume', name: 'resume' },
    { path: '/work', name: 'work' },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
      <Sheet>
          <SheetTrigger className="flex justify-center item-center">
              <CiMenuFries className='text-[32px] text-accent' />
          </SheetTrigger>
          <SheetContent className="flex flex-col">
              {/* logo */}
              <div className="mb-40 mt-32 text-center text-2xl">
                  <Link href="/">
                      <h1 className="text-4xl font-semibold">
                          sourav<span className="text-accent">.</span>
                      </h1>
                  </Link>
              </div>
              {/* nav-links */}
              <nav className='flex flex-col justify-center items-center gap-8'>
                  {links.map(({path, name}, index ) => {
                      return (
                          <Link key={index} href={path} className={`${path === pathname && "text-accent border-b-2 border-accent"} capitalize text-xl hover:text-accent hover:scale-105 transition-all`}>
                              {name}
                          </Link>
                      );
                  })}
              </nav>
          </SheetContent>
      </Sheet>
    )
}

export default MobileNav