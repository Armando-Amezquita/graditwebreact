import React from 'react'
import { listFooter } from '../assets/js'
import { ListFooter } from './ListFooter'
import social from '../assets/icons/Vector (2).png'

export function Footer() {

    const handleChange = (e, key) => {
        e.preventDefault()
        const showMenu = document.getElementById(key)
        showMenu.classList.toggle('footer-submenu-product-show')
    }
    
  return (
    <footer className='footer'>
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
                    <span> {/* <img src={social} alt="" /> */}</span>
                    <span></span>
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
