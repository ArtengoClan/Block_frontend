import React from 'react'
import sl from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={sl.container}>
        <div className={sl.wrapper}>
            <div className={sl.socialButton}>Sign in with Google</div>
            <div className={sl.socialButton}>Sign in with Github</div>
            <div className={sl.socialButton}>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage