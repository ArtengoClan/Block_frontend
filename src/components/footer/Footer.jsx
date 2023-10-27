import React from 'react'
import sl from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={sl.container}>
        <div className={sl.info}>
          <div className={sl.logo}>
            <Image src='/logo.png' alt='' width={50} height={50} />
            <h1 className={sl.logoText}>Lamablog</h1>
          </div>
          <p className={sl.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className={sl.icons}>
            <Image src='/facebook.png' alt='' width={18} height={18} />
            <Image src='/instagram.png' alt='' width={18} height={18} />
            <Image src='/tiktok.png' alt='' width={18} height={18} />
            <Image src='/youtube.png' alt='' width={18} height={18} />
          </div>
        </div>
        <div className={sl.links}>
          <div className={sl.list}>
            <span className={sl.listTitle}>Links</span>
            <Link href='/'>Homepage</Link>
            <Link href='/'>Blog</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
          </div>
          <div className={sl.list}>
            <span className={sl.listTitle}>Tags</span>
            <Link href='/'>Style</Link>
            <Link href='/'>Fashion</Link>
            <Link href='/'>Coding</Link>
            <Link href='/'>Travel</Link>
          </div>
          <div className={sl.list}>
            <span className={sl.listTitle}>Social</span>
            <Link href='/'>Facebook</Link>
            <Link href='/'>Instagram</Link>
            <Link href='/'>Tiktok</Link>
            <Link href='/'>Youtube</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer