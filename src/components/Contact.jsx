import React from 'react'
import pastilla1 from '../assets/img/contact/pastilla2 1.png'
import pastilla2 from '../assets/img/contact/pastilla3 1.png'
import pastilla3 from '../assets/img/contact/pastilla6 1.png'
import pastilla4 from '../assets/img/contact/pastillaverde 1.png'
import pastilla5 from '../assets/img/contact/pastlla4 1.png'

export function Contact() {
  return (
    <div className='contact'>
        <img className='pastilla1' src={pastilla4} alt="" />
        <img className='pastilla2' src={pastilla5} alt="" />
        <img className='pastilla3' src={pastilla1} alt="" />
        <img className='pastilla4' src={pastilla3} alt="" />
        <img className='pastilla5' src={pastilla2} alt="" />
        <h2 className='contact-title'>Join the green revolution without commitment</h2>
        <p className='contact-description'>If you are missing something and don't want to miss future promotions or our future products</p>
        <form className='contact-form' action="">
            <input className='contact-input' type="text" placeholder='Your Email' />
            <button className='contact-button'>Send</button>
        </form>
    </div>
  )
}
