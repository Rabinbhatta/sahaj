import React from 'react'
import map from  "../image/map.jpg"
import a from  "../image/a.png"
import b from  "../image/b.png"
import c from "../image/c.png"
import d from  "../image/d.png"
import "./styles.css"

const Map = () => {
  return (
    <div className='mapContainer'>
      <div className='icon'>
        <div className='icon1'>
          <div className='iconDetail'>
                 <div>Maps & Schedules</div>
                 <div>Get there on bus with convenient service throughout Kathmandu</div>
          </div>
          <div>
          <img src={a}/>
          </div>
        
        </div>
        <div className='icon1'>
        <div className='iconDetail'>
                 <div>Maps & Schedules</div>
                 <div>Get there on bus with convenient service throughout Kathmandu</div>
          </div>
          <div>
          <img src={c}/>
          </div>
        
        </div>
        <div className='icon1'>
        <div className='iconDetail'>
                 <div>Maps & Schedules</div>
                 <div>Get there on bus with convenient service throughout Kathmandu</div>
        </div>
        <div className='iconImage '>
        <img src={d}/>
        </div>
        
        </div>
             
        </div>
      <div className='mapImage'>
      <img src={map}/>
      </div>
      
    </div>
  )
}

export default Map