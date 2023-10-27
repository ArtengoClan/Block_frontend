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
      <div className={sl.burger} onClick={()=>setOpen(!open)}>
      {open ? 
        (
          <>
          <div className={sl.cross}></div>
          <div className={sl.cross}></div>
          </>
        ) : (
          <>
        <div className={sl.line}></div>
        <div className={sl.line}></div>
        <div className={sl.line}></div>
          </>

        )}

      </div>
      {open && (
        <div className={sl.responsiveMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/blog'>Blog</Link>
        </div>
      )}
    </>
  )
}

export default AuthLinks