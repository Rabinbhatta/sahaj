import React from 'react'
import "./styles.css"
import cycle from "../image/e.png"

const Cycle = () => {
  return (
    <div className='cycleContainer'>
        <div className='cycleImage'>
           <img src={cycle} />
        </div>
        <div className='cycleDescription'>
               <div className='cycleHead'>How Sahaj is</div>
               <div className='cycleHead1'>Innovating transportation ?</div>
               <div className='cycleContain'>Sahaj is revolutionizing transportation in Nepal by providing a smart card payment system that ensures secure, hassle-free, and easily accessible transactions. Our innovative approach enhances the safety and convenience of public transport, making it more sustainable and efficient for all users. Join us in making Nepal's transportation system smarter and more reliable.</div>
        </div> 
    </div>
  )
}

export default Cycle