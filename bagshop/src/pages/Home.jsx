import React from 'react'
import Navbar from '../components/Homecomponents/Navbar'
import Carousal from '../components/Homecomponents/Carousal'
import Demo from '../components/Homecomponents/demoproducts/Demo'
import Poster from '../components/Homecomponents/Poster'
import Shop from '../components/Homecomponents/Shop'
import Footer from '../components/Homecomponents/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousal/>
      <Demo/>
      <Poster/>
      <Shop/>
      <Footer/>
    </div>
  )
}

export default Home
