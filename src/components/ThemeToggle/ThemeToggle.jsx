'use client'

import React, { useContext } from 'react'
import sl from './ThemeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {
  const {theme,toggle} = useContext(ThemeContext)

  return (
    <div 
      style={theme === 'dark' ? {backgroundColor:'white'} : {backgroundColor: '#0f172a'}}
      className={sl.container} 
      onClick={toggle}>
      <Image src='/moon.png' alt='' width={14} height={14}/>
      <div 
        className={sl.ball} 
        style={theme === 'dark' ? {left:1,backgroundColor:'#0f172a'} : {right:1,backgroundColor: 'white'}}
      ></div>
      <Image src='/sun.png' alt='' width={14} height={14}/>
    </div> 
  )
}

export default ThemeToggle