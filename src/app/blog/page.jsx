import React from 'react'
import sl from './BlogPage.module.css'
import CardList from '@/components/CardList/CardList'
import Menu from '@/components/Menu/Menu'

const BlogPage = () => {
  return (
    <div className={sl.container}>
        <h1 className={sl.title}>Style Blog</h1>
        <div className={sl.content}>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}

export default BlogPage