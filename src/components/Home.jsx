import React, { useState, useEffect } from 'react'
import { getDataTotalProductsSell, getDataTotalCarrousel } from '../assets/js'
import { MainContainer } from './MainContainer'
import { Footer } from './Footer'

export function Home() {
    const [quantity, setQuantity] = useState(0)
    const [discover, setDiscover] = useState('')

    useEffect( () => async() => {
        setQuantity( await getDataTotalProductsSell());
        setDiscover(await getDataTotalCarrousel())
    }, [])


    console.log('discover', discover)

  return (
    <div className='container'>
        <div className='film'>
            <p>Gratis verzending vanaf €30</p>
        </div>  
        <MainContainer quantity={quantity} discover={discover} />
        <Footer />
    </div>
  )
}