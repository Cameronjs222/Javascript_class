import React, {useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Display = (props) => {
    const {products, setProducts} = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            setProducts(res.data)
            console.log(products)
        })
        .catch(err => console.log(err + " Catch"))
    }, [])

return (
    <div className='display-container'>
        {console.log(products)}
        {products.map((item, index) => (
            <div key={index} className='bg-danger bg-opacity-50 dispayContainer' style={{border: "2px solid white", padding: "10px"}}>
                <span className='displayTitle'>{item.Title}</span>
                <span className='displayPrice' style={{marginLeft: "10px"}}>${item.Price}</span>
                <p className='displayDescription'>{item.Description}</p>
                <Link to={`/products/${item._id}`}>{item.Title}'s page</Link>
            </div>
        ))}
    </div>
)
}

export default Display