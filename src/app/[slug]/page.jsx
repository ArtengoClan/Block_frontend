import React from 'react'
import sl from './SinglePage.module.css'
import Image from 'next/image'
import Menu from '@/components/Menu/Menu'
import Comments from '@/components/comments/Comments'

const SinglePage = () => {
  return (
    <div className={sl.container}>
        <div className={sl.infoContainer}>
            <div className={sl.textContainer}>
                <h1 className={sl.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <div className={sl.user}>
                    <div className={sl.userImageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={sl.avatar} />
                    </div>
                    <div className={sl.userTextContainer}>
                        <span className={sl.username}>John Doe</span>
                        <span className={sl.date}>01.01.2024</span>
                    </div>
                </div>
            </div>
            <div className={sl.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={sl.image} />
            </div>
        </div>
        <div className={sl.content}>
            <div className={sl.post}>
                <div className={sl.description}>
                    <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </p>
                    <h2>
                        Lorem Lorem ipsum
                    </h2>
                    <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </p>
                </div>
                <div className={sl.comment}>
                    <Comments />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePage