import React from 'react'
import imge from '../assets/img/image3.png'
import { Cards } from './Cards'

export function Carousel({discover}) {

    /* const images = [image1, image2]
    const [selectIndex, setSelectIndex] = useState(0)
    const [selectImage, setSelectImage] = useState(images[0]);

    const selectNewImage = (index, image, next = true) => {
        const condition = next ? selectIndex < images.length - 1 : selectIndex > 0;
        const nextIndex = next ? (condition ? selectIndex + 1 : 0) : condition ? selectIndex - 1 : image.length -1 
        setSelectImage(images[nextIndex])  
        setSelectIndex(nextIndex) 
    }

    const prev = () => {
        selectNewImage(selectIndex, images, false)  
    }

    const next = () => {
        selectNewImage(selectIndex, images)
    } */
    // let span = document.querySelectorAll('.let')
    // let span2 = document.querySelectorAll('.let2')
    // let produt = document.getElementsByClassName('.produt')
    // let productPage = Math.ceil(produt.length/4)
    // let l = 0
    // let movePer = 25.34
    // let maxMove = 203

    // //mobile
    // let mobileView = window.matchMedia("(max-width: 768px)")
    // if(mobileView.matches){
    //     movePer = 50.36
    //     maxMove = 504
    // }
    // let rigthMove = () => {
    //     l = l + movePer
    //     if(produt == 1){
    //         l=0
    //     }
    //     for (const i of produt) {
    //         if(l > maxMove){l = l -movePer}
    //         i.style.left = '-' + l + '%'
    //     }
    // }

    // let leftMove = () => {
    //     console.log('aqui')
    //     l = l -movePer
    //     if(l<=0){l=0}
    //     for (const i of produt) {
    //         if(productPage > 1)
    //         i.style.left = '-' + l + '%'
    //     }
    // }

    // console.log('span', span)
    // // span[1].onclick = () =>{rigthMove()}
    // // span[1].onclick = () =>{rigthMove()}
    // span[0].onclick = () =>{leftMove()}

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
