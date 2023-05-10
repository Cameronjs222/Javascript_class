import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Display = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(response => {
            setProducts(response.data.Products)
        })
        .catch(err => console.log(err + " Catch"))
    }, [])

return (
    <div>
        {products.map((item, index) => (
            <div key={index} className='dispayContainer' style={{border: "2px solid white", padding: "10px"}}>
                <span className='displayTitle'>{item.Title}</span>
                <span className='displayPrice' style={{marginLeft: "10px"}}>${item.Price}</span>
                <p className='displayDescription'>{item.Description}</p>
            </div>
        ))}
    </div>
)
}

export default Display