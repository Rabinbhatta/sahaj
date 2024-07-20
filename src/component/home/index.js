import React from 'react'
import "./styles.css"
import Navbar from '../navbar'
import Welcome from '../welcome'
import Map from '../map'

const Home = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><Welcome/></div>
      <div><Map/></div>
    </div>
    
  )
}

export default Home