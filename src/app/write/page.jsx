'use client'

import React, { useState } from 'react'
import sl from './WritePage.module.css'
import Image from 'next/image'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css'

const WritePage = () => {
  const [open,setOpen] = useState(false)
  const [value,setValue] = useState('')
  return (
    <div className={sl.container}>
      <input type='text' placeholder='Title' className={sl.input} />
      <div className={sl.editor}>
        <button className={sl.button} onClick={() => setOpen(!open)}>
          <Image src='/plus.png' alt='' width={16} height={16} />
        </button>
        {open && (
          <div className={sl.add}>
            <button className={sl.addButton}>
              <Image src='/image.png' alt='' width={16} height={16} />
            </button>
            <button className={sl.addButton}>
              <Image src='/external.png' alt='' width={16} height={16} />
            </button>
            <button className={sl.addButton}>
              <Image src='/video.png' alt='' width={16} height={16} />
            </button>
          </div>
        )}
          <ReactQuill className={sl.textArea} theme='bubble' value={value} onChange={setValue} placeholder='tell your story' />
      </div>
      <button className={sl.publish}>Publish</button>
    </div>
  )
}

export default WritePage