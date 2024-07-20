import React from 'react'
import "./styles.css"
import cycle from "../image/cycle.png"

const Cycle = () => {
  return (
    <div className='cycleContainer'>
        <div className='cycleImage'>
           <img src={cycle} />
        </div>
        <div className='cycleDescription'>
               <div className='cycleHead'>How to use</div>
               <div className='cycleHead1'>Cycle Inside Ringroad?</div>
               <div className='cycleContain'>Discover the convenience of planning your travels with ease using our comprehensive bus schedule platform. Whether you're commuting daily, exploring a new city, or embarking on a cross-country adventure, we've got you covered with up-to-date schedules, routes, and essential information to make your journey seamless.</div>
        </div> 

    </div>
  )
}

export default Cycle