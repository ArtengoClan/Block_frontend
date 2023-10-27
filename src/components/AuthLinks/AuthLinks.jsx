'use client'

import React, { useState } from 'react'
import sl from './AuthLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

  const [open,setOpen] = useState(false)

  // temporary
  const status = 'authenticated'
  return (
    <>
      {
        status == 'notauthenticated' ? 
        (
          <Link href='/login' className={sl.link}>Login</Link>
        )
        :
        (
          <>
          <Link href='/write' className={sl.link}>Write</Link>
          <span className={sl.link}>Logout</span>
          </>
        )
      }
      <div className={sl.burger} onClick={()=>setOpen(!open)}>
        <div className={sl.line}></div>
        <div className={sl.line}></div>
        <div className={sl.line}></div>
      </div>
      {open && (
        <div className={sl.responsiveMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
      {
        status == 'notauthenticated' ? 
        (
          <Link href='/login'>Login</Link>
        )
        :
        (
          <>
          <Link href='/write'>Write</Link>
          <span className={sl.link}>Logout</span>
          </>
        )
      }
        </div>
      )}
    </>
  )
}

export default AuthLinks