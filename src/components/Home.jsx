import React, { useState, useEffect } from 'react'
import { getDataTotalProductsSell, getDataTotalCarrousel } from '../assets/js'
import { MainContainer } from './MainContainer'
import { Footer } from './Footer'

export function Home() {
  const URLPRODUCTSELL = `https://gradistore-spi.herokuapp.com/orders`
  const URLDISCOVER = `https://gradistore-spi.herokuapp.com/products/all`
  const [quantity, setQuantity] = useState(0)
  const [discover, setDiscover] = useState('')

  async function getDataTotalProductsSell() {
    fetch(`${URLPRODUCTSELL}`)
      .then(res => res.json())
      .then(res => {
        const orders = res.orders.nodes;
        let lineItemsTotal = 0;

        for (const order of orders) {
          for (const lineitem of order.lineItems.nodes) {
            lineItemsTotal += lineitem.quantity
          }
        }
        setQuantity(Math.floor(lineItemsTotal / orders.length));
      })
  }

  async function getDataTotalCarrousel() {
    fetch(`${URLDISCOVER}`)
      .then(data => data.json())
      .then(res => {
        setDiscover(res.products.nodes)
      })
  }

  useEffect(() => {
     getDataTotalProductsSell()
     getDataTotalCarrousel()
  }, [])

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