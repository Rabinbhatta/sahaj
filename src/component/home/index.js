import React from 'react'
import "./styles.css"
import Navbar from '../navbar'
import Welcome from '../welcome'
import Map from '../map'
import Cycle from '../cycle'
import Chatbot from '../chatbot'
import Footer from '../footer'
import Card from '../card'
import Motives from '../motives'

const Home = () => {
  return (
    <div>
      <div><Navbar/></div>
      <div><Welcome/></div>
      <div><Map/></div>
      <div><Cycle/></div>
      <div><Chatbot/></div>
      <div><Card/></div> 
      <div><Motives/></div>
      <div><Footer/></div>
    </div>
    
  )
}

export default Home