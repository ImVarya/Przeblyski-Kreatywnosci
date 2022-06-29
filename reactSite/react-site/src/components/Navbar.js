import React, { useState } from 'react'
import Link from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-lofo">
                    TRVL 
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
//<img src='../../public/img/feather-pointed-solid.svg'></img>