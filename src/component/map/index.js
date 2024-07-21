import React, { useState } from 'react'
import map from  "../image/map.jpg"
import a from  "../image/a.png"
import c from "../image/c.png"
import d from  "../image/d.png"
import "./styles.css"
import { FaMagnifyingGlassPlus } from "react-icons/fa6";

const Map = () => {
  const [moveIn,setMoveIn] = useState(true)
  const handleClick = (status)=>{
        if(status == "false"){
             setMoveIn(false)
        }
  }
  return (
    <div className='mapContainer'>
      <div className='icon'>
        <div className='icon1'>
          <div className='iconDetail'>
                 <div className='iconHead'>Maps & Schedules</div>
                 <div className='iconDetail1'>Get there on bus with convenient service throughout Kathmandu</div>
          </div>
          <div>
          <img src={a}/>
          </div>
        
        </div>
        <div className='icon1'>
        <div className='iconDetail'>
                 <div className='iconHead'>Fares</div>
                 <div className='iconDetail1'>Find the perfect pass for your trip</div>
          </div>
          <div>
          <img className='iconImage2' src={c}/>
          </div>
        
        </div>
        <div className='icon1'>
        <div className='iconDetail'>
                 <div className='iconHead'>Cards</div>
                 <div className='iconDetail1'>Get Cards from bus</div>
        </div>
        <div className='iconImage '>
        <img className='iconImage2' src={d}/>
        </div>
        
        </div>
             
        </div>
      <div className="mapImage">
        <h1>Routes</h1>
      <div><img src={map}/></div>
      </div>
        {!moveIn && <div className='mapimage'>
        <div>
          <img src={map}/>
          </div>

        </div>}
        
      
      
      
    </div>
  )
}

export default Map