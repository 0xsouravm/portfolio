"use client";
import Link from 'next/link';
import { Button } from './ui/Button';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

// components 
import Nav from './Nav';
import MobileNav from './MobileNav';

const Header = () => {
    const pathname = usePathname();
    const [skewClass, setSkewClass] = useState('');
    const [firstPartName, setFirstName] = useState('sou');
    const [lastPartName, setLastName] = useState('rav');
    return <header className='py-8 xl:py-12 text-white'>
        {/* Logo */}
        <div className="container mx-auto flex justify-between items">
            <Link href="/">
                <h1 className={`text-4xl font-semibold transition-all ${skewClass}`}>
                    <span
                        onMouseEnter={() => setSkewClass('-skew-x-12')}
                        onMouseLeave={() => setSkewClass('')}
                    >
                        {firstPartName}
                    </span>
                    <span
                        onMouseEnter={() => setSkewClass('skew-x-12')}
                        onMouseLeave={() => setSkewClass('')}
                    >
                        {lastPartName}
                    </span>
                    <span 
                        className='text-accent'
                        onMouseEnter={() => {
                            setFirstName('mis');
                            setLastName('hra');
                        }}
                        onMouseLeave={() => {
                            setFirstName('sou');
                            setLastName('rav');
                        }}
                    >.</span>
                </h1>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden xl:flex items-center gap-8'>
                <Nav />
                <Link href="/contact">
                    <Button className={`${pathname === "/contact" && "text-accent hover:text-white"} border-2 hover:border-accent hover:translate-x-0.5 hover:translate-y-0.5 transition-all`}>Reach Out</Button>
                </Link>
            </div>

            {/* Mobile Navigation */}
            <div className='xl:hidden'>
                <MobileNav />
            </div>
        </div>
    </header>
}
export default Header;