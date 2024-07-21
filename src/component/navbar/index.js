import React from 'react'
import "./styles.css"

const Navbar = () => {
  const handleScroll = (number)=>{
         if(number == 1){
          window.scrollTo({
            top: 500, // Change this value to the desired vertical position
            behavior: 'smooth', // 'auto' for instant scroll
          });
         }else if(number == 0){
          window.scrollTo({
            top: 0, // Change this value to the desired vertical position
            behavior: 'smooth', // 'auto' for instant scroll
          });
         }else if(number == 2){
          window.scrollTo({
            top: 1650, // Change this value to the desired vertical position
            behavior: 'smooth', // 'auto' for instant scroll
          });
         }else if(number == 3){
          window.scrollTo({
            top: 2230, // Change this value to the desired vertical position
            behavior: 'smooth', // 'auto' for instant scroll
          });}else if(number == 4){
            window.scrollTo({
              top: 1100, // Change this value to the desired vertical position
              behavior: 'smooth', // 'auto' for instant scroll
            });}
  }
  return (
    <div className='navContainer'>
        <div className='logo'>
             <div>SAHAJ</div>
        </div>
        <div className='info'>
            <button className='home' onClick={()=>handleScroll("0")} >Home</button>
            
            <button className='home' onClick={()=>handleScroll("1")}>Routes</button>
            {/* <button className='home' onClick={()=>handleScroll("4")}>Cycle</button> */}
            <button className='home' onClick={()=>handleScroll("2")}>Card</button>
            <button className='home' onClick={()=>handleScroll("3")}>Motives</button>

        </div>
    </div>
  )
}

export default Navbar