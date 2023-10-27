import Link from 'next/link'
import React from 'react'
import sl from './MenuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={sl.categoryList}>
        <Link href='/blog?cat=style' className={`${sl.categoryItem} ${sl.style}`}>Style</Link>
        <Link href='/blog' className={`${sl.categoryItem} ${sl.fashion}`}>Fashion</Link>
        <Link href='/blog' className={`${sl.categoryItem} ${sl.food}`}>Food</Link>
        <Link href='/blog' className={`${sl.categoryItem} ${sl.coding}`}>Coding</Link>
        <Link href='/blog' className={`${sl.categoryItem} ${sl.travel}`}>Travel</Link>
        <Link href='/blog' className={`${sl.categoryItem} ${sl.culture}`}>Culture</Link>
    </div>  )
}

export default MenuCategories