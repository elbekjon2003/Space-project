import React from 'react'
import Navbar from '../components/Navbar'
import moon from "../assets/destination/image-moon.png"

import './Destination.scss'


function Destination() {
  return (
    <section className='dest-wrapper'>
        <Navbar/>
        <div className="destination">
            <div className="left-part-des">
                <h2><span>01</span> Pick your destination</h2>
                <img src={moon} alt="" />
            </div>
            <div className="right-part-des">
                <h1>MOON</h1>
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <div className="line"></div>
                <div className="moon-data">
                    <div className="distance">
                        <p>AVG. DISTANCE</p>
                        <span>384,400 km</span>
                    </div>
                    <div className="trevel-time">
                        <p>Est. travel time</p>
                        <span>3 days</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Destination