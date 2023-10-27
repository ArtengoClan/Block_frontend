import React from 'react'
import sl from './pagination.module.css'

const Pagination = () => {
  return (
    <div className={sl.container}>
      <button className={sl.button}>Previous</button>
      <button className={sl.button}>Next</button>
    </div>
  )
}

export default Pagination