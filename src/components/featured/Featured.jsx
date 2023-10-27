import React from 'react'
import sl from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={sl.container}>
      <h1 className={sl.title}>
        <b>hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={sl.post}>
        <div className={sl.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill  className={sl.image}/>
        </div>
        <div className={sl.textContainer}>
          <h1 className={sl.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elite.</h1>
          <p className={sl.postDesc}>
          Lorem ipsum dolor sit amet alim consectetur adipisicing elite.
          Lorem ipsum dolor sit amet alim consectetur adipisicing elite.
          Lorem ipsum dolor sit amet alim consectetur adipisicing elite.
          Lorem ipsum dolor sit amet alim consectetur adipisicing elite.
          </p>
          <button className={sl.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured