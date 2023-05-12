import React, {useEffect, useState} from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios'
const ProductPage = () => {
  const [productId, setProductId] = useState({})
  const {_id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${_id}`)
    .then(res => {
        setProductId(res.data)
      })
      .catch(err => console.log(err + " Catch"))
    }, [])
    console.log(productId)
    
    return (
      <div className='bg-danger bg-opacity-50 dispayContainer' style={{border: "2px solid white", padding: "10px"}}>
      <span className='displayTitle'>{productId.Title}</span>
      <span className='displayPrice' style={{marginLeft: "10px"}}>${productId.Price}</span>
      <p className='displayDescription'>{productId.Description}</p>
    </div>
  )
}

export default ProductPage