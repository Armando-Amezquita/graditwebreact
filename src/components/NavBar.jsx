import React from 'react'
import { useRef } from 'react'

export function NavBar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

  return (
    <header className='navbar'>
      <div className='navbar-container'>
        <span className='nav-btn nav-open' onClick ={showNavbar}></span>
        <div className='logo'>
          <span className='logo-1'></span>
          <span className='logo-2'></span>
          <span className='logo-3'></span>
        </div>
        <div>
          <span className='garbage'></span>
        </div>
        
        <nav ref={navRef}>
          <a className='navbar-link' href="">Brauzz shop </a>
          <a className='navbar-link' href="">Ontdekken </a>
          <a className='navbar-link' href="">Over Brauzz </a>
          <span className='nav-btn nav-close-btn' onClick={showNavbar}></span>
        </nav>
      </div>
    </header>
  )
}

