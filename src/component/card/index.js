import React from 'react'
import card from "../image/card.png"
import "./styles.css"

const Card = () => {
  return (
    <div className='cardContainer'>
        <div className='cardDescription'>
               <div className='cardHead'>How to use</div>
               <div className='cardHead1'> Smart Card</div>
               <div className='cardContain'>Users receive a card embedded with a unique identifier, which is registered in the system. They can load credit onto the card. When using public transport, they simply tap the card on a reader, which scans the RFID tag and deducts the fare from their credit. This process ensures quick, secure transactions, while users can manage their card balance.</div>
        </div> 
        <div className='cardImage'>
           <img src={card} />
        </div>

    </div>
  )
}

export default Card