import React from 'react'
import sl from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={sl.container}>
      <h1 className={sl.title}>Popular Categories</h1>
      <div className={sl.categories}>
        <Link href='/blog?cat=style' className={`${sl.category} ${sl.style}`}>
          <Image
            src='/style.png'
            alt=''
            width={32}
            height={32}
            className={sl.image}
          />
          Style
        </Link>
        <Link href='/blog' className={`${sl.category} ${sl.fashion}`}>
          <Image
            src='/fashion.png'
            alt=''
            width={32}
            height={32}
            className={sl.image}
          />
          Fashion
        </Link>
        <Link href='/blog' className={`${sl.category} ${sl.food}`}>
          <Image
            src='/food.png'
            alt=''
            width={32}
            height={32}
            className={sl.image}
          />
          Food
        </Link>
        <Link href='/blog' className={`${sl.category} ${sl.travel}`}>
          <Image
            src='/travel.png'
            alt=''
            width={32}
            height={32}
            className={sl.image}
          />
          Travel
        </Link>
        <Link href='/blog' className={`${sl.category} ${sl.culture}`}>
          <Image
            src='/culture.png'
            alt=''
            width={32}
            height={32}
            className={sl.image}
          />
          Culture
        </Link>
        <Link href='/blog' className={`${sl.category} ${sl.coding}`}>
          <Image
            src='/coding.png'
            alt=''
            width={32}
            height={32}
            className={sl.image}
          />
          Coding
        </Link>
      </div>
    </div>
  )
}

export default CategoryList