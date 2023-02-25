import React from 'react'
import './Footer.css'
import image from '../../../assets/Home/shape-bg.png'

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={image} alt='footer' />
        </div>
    </div>
  )
}
