import React, {useEffect, useState} from 'react'
import stella from '../assets/img/Star.png'

export function Cards({image, title, score, minprice, maxprice}) {
  const [star, setStar] = useState([1])

  const draw = () => {
    if(score > 100 & score < 200){
      setStar([1, 1])
      return 
    }
    if(score > 200 & score < 300){
      setStar([1, 1, 1])
      return
    }

    if(score > 300 & score < 400){
      setStar([1, 1, 1, 1])
      return
    }
    if(score > 400 ){
      setStar([1, 1, 1, 1,1])
      return
    }
  }

  useEffect(() => {
    draw()
  }, [setStar])

  console.log(star)

  return (
    <div className="produt">
      <picture>
          <img src={image} alt="" />
      </picture>
      <div className='details'>
          <p>
              <b className='product-details-title'>{title}</b>
          </p>
          <div className='product-details-description'>
            <div className='product-details-description-start'>
              {
                star.map(e => (
                  <img src={stella} alt="" />
                ))
              }
              <span> 
              </span>
              <span className='score'>({score})</span>
            </div>
            <div className='product-details-description-prices'>
              <p><span className='middle-underline'> €{minprice}</span> </p>
              <p><span className='max-price'>€{maxprice}</span> </p>
            </div>
          </div>
      </div>
  </div>
  )
}
