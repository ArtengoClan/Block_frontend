import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import sl from './MenuPosts.module.css'

const MenuPosts = ({withImage}) => {
  return (
    <div className={sl.items}>
        <Link href='/' className={sl.item}>
        {withImage && (
            <div className={sl.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={sl.image} />
            </div>
          )}
          <div className={sl.textContainer}>
            <span className={`${sl.category} ${sl.travel}`}>
              Travel
            </span>
            <h3 className={sl.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={sl.detail}>
              <span className={sl.username}>John Doe</span>
              <span className={sl.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={sl.item}>
        {withImage && (
            <div className={sl.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={sl.image} />
            </div>
          )}
          <div className={sl.textContainer}>
            <span className={`${sl.category} ${sl.culture}`}>
              Culture
            </span>
            <h3 className={sl.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={sl.detail}>
              <span className={sl.username}>John Doe</span>
              <span className={sl.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={sl.item}>
        {withImage && (
            <div className={sl.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={sl.image} />
            </div>
          )}
          <div className={sl.textContainer}>
            <span className={`${sl.category} ${sl.food}`}>
              Food
            </span>
            <h3 className={sl.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={sl.detail}>
              <span className={sl.username}>John Doe</span>
              <span className={sl.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
        <Link href='/' className={sl.item}>
          {withImage && (
            <div className={sl.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={sl.image} />
            </div>
          )}
          <div className={sl.textContainer}>
            <span className={`${sl.category} ${sl.fashion}`}>
              Fashion
            </span>
            <h3 className={sl.postTitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className={sl.detail}>
              <span className={sl.username}>John Doe</span>
              <span className={sl.date}> - 10.03.2023</span>
            </div>
          </div>
        </Link>
    </div>


  )
}

export default MenuPosts