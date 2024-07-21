import React from 'react';
import './styles.css';
import cycle from "../image/cyclestation.webp"
import scanner from "../image/scanner.jpg"

const Motives = () => {
  return (
    <div className="motives-container">
      <h1 className="motives-title">Our Motives</h1>
      <div className="motives-content">
        <div className="motive-section">
          <div className="motive-text">
            <h2>Smart Payment System</h2>
            <p>
              We aim to simplify and streamline the payment process for public transportation. Our RFID-based payment system allows for quick, contactless transactions, making it easier and more convenient for users to access transportation services.
            </p>
            <p>
              The payment system will support multiple payment methods including mobile payments and prepaid cards. This flexibility ensures that all users, regardless of their preferred payment method, can benefit from the system. Additionally, the system will provide detailed usage records and support for automated top-ups.
            </p>
          </div>
          <div className='motive-image'>
          <img src={scanner} />
          </div>
        </div>
        {/* <div className="motive-section">
          <div className="motive-text">
            <h2>Cycle Stations</h2>
            <p>
              Promoting eco-friendly transportation options is a key part of our mission. By establishing cycle stations across the city, we encourage people to adopt cycling as a healthy and environmentally friendly mode of transport. These stations are strategically located to provide easy access to bicycles for short trips and daily commutes.
            </p>
            <p>
              The cycle stations will be equipped with secure locking mechanisms and real-time availability tracking. Users can easily find and rent bicycles through a mobile app, which also provides information on the nearest stations and available routes. This initiative aims to reduce the reliance on motorized vehicles and promote a healthier lifestyle.
            </p>
          </div>
          <div className='motive-image'>
          <img src={cycle} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Motives;