import React from 'react'
import image from "../image/bus.png"
import "./styles.css"
const Welcome = () => {
  return (
    <div className='welcomeContainer'>
        <div className='description'>
            
            <div>Welcome to our </div>
           <div className='wel'>Sahaj</div>
           <div className='des'> 
           Welcome to our Sahaj website, dedicated to providing  detailed bus schedules and essential travel information for journeys within the valley. Discover convenient routes, updated timetables, and helpful tips to navigate seamlessly through your urban travels."
           </div>
        
          
        </div>
        <div className='image'>
           <img src={image}/>
        </div>
    </div>
  )
}

export default Welcome