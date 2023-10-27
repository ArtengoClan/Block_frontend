import React from 'react'
import sl from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={sl.container}>
        <div className={sl.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill  className={sl.image}/>
        </div>
        <div className={sl.textContainer}>
            <div className={sl.detail}>
                <span className={sl.date}>11.02.2023 - </span>
                <span className={sl.category}>culture </span>
            </div>
            <Link href='/card'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Link>
            <p className={sl.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link href='/' className={sl.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card