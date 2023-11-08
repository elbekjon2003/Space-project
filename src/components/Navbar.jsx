import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/shared/logo.svg"
import "./Navbar.scss"

function Navbar() {
  return (
        <nav>
            <div className="logo-section">
                <a href="#"><img src={Logo} alt="" /></a>
            </div>
            <div className="nav-links">
                <ul>
                    <li><NavLink to='/'><span>00</span> Home</NavLink></li>
                    <li><NavLink to='/destination'><span>01</span> Destination</NavLink></li>
                    <li><NavLink to='/crew'><span>02</span> Crew</NavLink></li>
                    <li><NavLink to='/technology'><span>03</span> Technology</NavLink></li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar