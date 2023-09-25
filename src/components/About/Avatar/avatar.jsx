import React from 'react'
import LogoS from '../../../assets/images/avatar.png'
import './avatar.scss'
const Avatar = () => {
  return (
    <div className='logo-rachit'>
      <img
        className="solid-logo"
        src={LogoS}
        alt="JavaScript,  Developer"
      />
    </div>
  )
}

export default Avatar
