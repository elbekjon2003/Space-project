import React from 'react'
import Navbar from '../components/Navbar'

import "./HomePage.scss"

function HomePage() {
  return (
    <div className='home'>
        <Navbar/>
        <section>
            <div className="home-wrapper">
                <div className="left-part-home">
                    <span>SO, YOU WANT TO TRAVEL TO</span>
                    <h1>SPACE</h1>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="right-part-home">
                    <span>EXPLORE</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HomePage