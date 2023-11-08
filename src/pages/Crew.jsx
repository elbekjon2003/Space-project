import React from 'react'
import astranaunt from '../assets/crew/image-douglas-hurley.png'
import Navbar from '../components/Navbar'

import './Crew.scss'

function Crew() {
  return (
    <section className="crew-main">
        <Navbar/>
        <div className="crew">
            <div className="left-part-crew">
                <h2><span>02</span> Meet your crew</h2>
                <span>Commander </span>
                <h1>Douglas Hurley</h1>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
            </div>
            <div className="right-part-crew">
                <img src={astranaunt} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Crew