import React from 'react'
import sl from './navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';
import AuthLinks from '../AuthLinks/AuthLinks';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Navbar = () => {
  return (
    <div className={sl.container}>
        <div className={sl.social}> 
            <Image src='/facebook.png' alt='facebook' width={24} height={24} />
            <Image src='/instagram.png' alt='instagram' width={24} height={24} />
            <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
            <Image src='/youtube.png' alt='youtube' width={24} height={24} />
        </div>
        <div className={sl.logo}>lamablog</div>
        <div className={sl.links}>
            <ThemeToggle />
            <Link href='/' className={sl.link}>Homepage</Link>
            <Link href='/' className={sl.link}>Contact</Link>
            <Link href='/' className={sl.link}>About</Link>
            <AuthLinks />
        </div>
    </div>
  );
}

export default Navbar