"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/resume', name: 'resume' },
    { path: '/work', name: 'work' },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className='flex gap-9'>
            {links.map(({path, name}, index ) => {
                return (
                    <Link key={index} href={path} className={`${path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent hover:scale-105 transition-all`}>
                        {name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav