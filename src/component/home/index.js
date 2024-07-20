import React from 'react'
import "./styles.css"
import Navbar from '../navbar'
import Welcome from '../welcome'

const Home = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><Welcome/></div>
    </div>
    
  )
}

export default Home