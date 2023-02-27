import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Style/style.css'
import ContactUs from './ContactUs'

const NavBar = () => {
  return (
    <div>
        <nav>
        <Link to={'/'} style={{textDecoration: 'none'}}> <h1>Travel</h1></Link>
        <div className='navContent'>
           <Link to={'/'} id='cont'> Home </Link>
           <Link to={'/destinations'}  id='cont'>Destinations</Link>
           <Link to={'/tours'}  id='cont'>Tours</Link>
           <Link to={'/galery'}  id='cont'>Galery</Link>
        </div>
        <button>Contact Us</button>
        </nav>
    </div>
  )
}

export default NavBar
