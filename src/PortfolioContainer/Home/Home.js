import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import videoBg from '../../assets/Home/stars-6962.mp4'
import Header from './Header/Header'

import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
        <Header />
        <Profile />
        <video
        src={videoBg} autoPlay loop muted/>
        <Footer />
    </div>
  )
}
