import React from 'react'
import { NavBar } from './NavBar'
import { Carousel } from './Carousel'
import { Contact } from './Contact'
import imgf from '../assets/img/main/cleaners.png'
import imgf2 from '../assets/img/main/kitbassicperspective.png'
import start from '../assets/icons/Star 10.svg'

export function MainContainer({quantity, discover}) {
  return (
    <main>
        <section className='main-container'>
            <NavBar />
            <div className='main-images'>
                <img className='main-image-1' src={imgf} alt="cleaners.png" />
                <img className='main-image-2' src={imgf2} alt="kitbassicperspective.png" />
            </div>
            <div className='main-description'>
                <div className='main-description-starts'>
                    <span><img src={start} alt="" /></span>
                </div>
                <h1 className='main-description-title'>Schoonmaken, <br /> maar {quantity ? quantity : 0} dan écht clean</h1>
                <p className='main-description-content'>Join de schoonmaak(r)evolutie!</p>
                <button className='main-description-pay'>
                    <a href="">shup nu</a> 
                    <span>i</span>
                </button>
                <span className='main-description-content-span'>Meer dan 40.000 klanten</span>
                <span className='main-description-content-span right'>+2.100 reviews</span>
            </div>
        </section>
        <Carousel discover={discover}/>
        <Contact />
    </main>
  )
}
