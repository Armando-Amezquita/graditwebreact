import React, {useState, useEffect} from 'react'
import imge from '../assets/img/image3.png'
import { Cards } from './Cards'

export function Carousel() {
    const URLDISCOVER = `https://gradistore-spi.herokuapp.com/products/all`
    
    const [discover, setDiscover] = useState('')

    const getDataTotalCarrousel = async() => {
        try{
            const data = await fetch(`${URLDISCOVER}`)
                .then(data => data.json())
                .then(res => res)
                .catch(err => console.log(err))
    
            const products = data.products.nodes
    
            return products;
    
        }catch(err){
            console.log('err', err)
        }
    }
    useEffect( () => async() => {
        setDiscover(await getDataTotalCarrousel())
    }, [])

    console.log('discover', discover)
  return (
    <div className='section-product-container'>
        {/* <div>
            <span  className='let'>left</span>
            <span  className='let2'>rigth</span>
        </div> */}
        <div className='discover'>
            <h2 className='discover-title'>Discover our <br /> planet-friendly offer</h2>
            <div className='discover-buttons-container'>
                <button  className='discover-button'>
                    <span className='discover-button-icon1'> </span>
                </button>
                <button  className='discover-button'>
                    <span className='discover-button-icon2'></span>
                </button>
            </div>
        </div>
        <section className='section-product'>
            {
                discover.length > 0 ? discover.map(card => (
                    <Cards 
                        title={card.title}
                        image={imge}
                        score={card.tags[0]}
                        minprice={card.prices.min.amount}
                        maxprice={card.prices.max.amount}
                        key={card.id}

                    />
                )): <h1>Cargando</h1>
            }
        </section>
        <button className='discover-button'>Browse all products</button>
    </div>
  )
}
