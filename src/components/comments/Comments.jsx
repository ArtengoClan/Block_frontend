import React from 'react'
import sl from './comments.module.css'
import Link from 'next/link';
import Image from 'next/image';

const Comments = () => {
    const status = 'authenticated';
  return (
    <div className={sl.container}>
        <h1 className={sl.title}>Comments</h1>
        {status === 'authenticated' ? (
            <div className={sl.write}>
                <textarea placeholder='write a comment' className={sl.input} />
                <button className={sl.button}>Send</button>
            </div>
        ) : (
            <Link href='/login'>Login to write a commit</Link>
        )}
        <div className={sl.comments}>
            <div className={sl.comment}>
                <div className={sl.user}>
                    <Image src='/p1.jpeg' alt='' width={50} height={50} className={sl.image} />
                    <div className={sl.userInfo}>
                        <span className={sl.username}>John Doe</span>
                        <span className={sl.date}>01.01.2023</span>
                    </div>
                </div>
                <p className={sl.desc}>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comments 