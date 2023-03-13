import React from 'react'
import { listFooter } from '../assets/js'
import { ListFooter } from './ListFooter'

export function Footer() {

    const handleChange = (e, key) => {
        e.preventDefault()
        const showMenu = document.getElementById(key)
        showMenu.classList.toggle('footer-submenu-product-show')
    }
    
  return (
    <footer id='footer' className='footer'>
        <div className='footer-brand'>
            <div className='logo'>
            <span className='logo-1'></span>
            <span className='logo-2'></span>
            <span className='logo-3'></span>
            </div>
            <p>brauzz.</p>
        </div>
        <div className='footer-container'>
            <div className='footer-produts'>
                {
                    listFooter.map(item => (
                        <ListFooter 
                            key={item.id}
                            title={item.title}
                            id={item.id}
                            subtitles={item.subtitles}
                            showMenu={(e) => handleChange(e, item.id)}
                        />
                    ))
                }
                <div className='footer-contact'>
                    <p className='footer-contact-title'>Contact</p>
                <div>   
                    <span className='social-media'></span>
                    <span className='social-media'></span>
                    <p className='footer-social-description'>BRAUZZ. BV // Over de Beek 55, 1840 <br /> Londerzeel // VAT: BE 0747.951.855</p>
                    <div className='footer-cards'>
                        <span className='footer-card1'></span>
                        <span className='footer-card2'></span>
                        <span className='footer-card3'></span>
                        <span className='footer-card4'></span>
                        <span className='footer-card5'></span>
                        <span className='footer-card6'></span>
                        <span className='footer-card7'></span>
                    </div>
                </div>
            </div>
                
            </div>
        </div>
        <div className='footer-copyr'>
            <span> © 2021 All rights reserved</span>
        </div>
    </footer>
  )
}
