import React from 'react'
import Navbar from '../components/Navbar'
import airship from '../assets/technology/image-launch-vehicle-portrait.jpg'

import './Technology.scss'

function Technology() {
  return (
    <section className="tech-main">
        <Navbar/>
        <div className="technology">
            <div className="left-part-tech">
                <h2><span>03</span> SPACE LAUNCH 101</h2>
                <span>THE TERMINOLOGY…</span>
                <h1>LAUNCH VEHICLE</h1>
                <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>
            <div className="right-part-tech">
                <img src={airship} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Technology