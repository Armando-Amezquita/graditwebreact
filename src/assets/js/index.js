const URLPRODUCTSELL = `https://gradistore-spi.herokuapp.com/orders`
const URLDISCOVER = `https://gradistore-spi.herokuapp.com/products/all`

export const getDataTotalProductsSell = async() => {
    const data = await fetch(`${URLPRODUCTSELL}`)
        .then(res => res.json())
        .then(res => res)
        .catch(err => console.log(err));
        
    const orders = data.orders.nodes;
    let lineItemsTotal = 0;

    for (const order of orders) {
        for (const lineitem of order.lineItems.nodes) {
            lineItemsTotal += lineitem.quantity
        }
    }
    return Math.floor(lineItemsTotal / orders.length); 
}

export const getDataTotalCarrousel = async() => {
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


export const listFooter =[
    {
        id: 1,
        title: 'Our produits',
        subtitles: [ 'Cleaners', 'Detergent', 'Dishwasher', 'Accessories']
    },
    {
        id: 2,
        title: 'Discover',
        subtitles: [ 'Blog', 'FAQ', 'Contact', 'Jobs']
    },
    {
        id: 3,
        title: 'Legal',
        subtitles: [ 'Privacy', 'Refund policy', 'General terms and conditions']
    },
]
