import React from 'react'
import "./styles.css"

const Navbar = () => {
  return (
    <div className='navContainer'>
        <div className='logo'>
             <div>SAHAJ</div>
        </div>
        <div className='info'>
            <div className='home'>Home</div>
            <div className='home'>About</div>
            <div className='home'>Schedules</div>
            <div className='home'>Routes</div>
            <div className='home'>Card</div>
        </div>
    </div>
  )
}

export default Navbar