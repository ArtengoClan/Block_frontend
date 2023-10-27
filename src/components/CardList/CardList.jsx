import React from 'react'
import sl from './CardList.module.css'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

const CardList = () => {
  return (
    <div className={sl.container}>
    <h1 className={sl.title}>Recent Posts</h1>
    <div className={sl.posts}>
      <Card />
    </div>
        <Pagination />
    </div>
  )
}

export default CardList