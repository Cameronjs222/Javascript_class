import React, {useEffect, useState} from 'react'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
const ProductPage = (props) => {
  const {removeFromDom} = props
  const [productId, setProductId] = useState({})
  const {_id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/product/${_id}`)
    .then(res => {
        setProductId(res.data)
        console.log(productId)
      })
      .catch(err => console.log(err + " Catch"))
    }, [])
    const deleteproduct = (productId) => {
      axios.delete('http://localhost:8000/api/product/' + productId)
          .then(res => {
              removeFromDom(productId._id)
              navigate("/")

          })
          .catch(err => console.log(err))
  }
    
    return (
      <div className='bg-dark bg-opacity-25 col-6 mx-auto text-light' style={{border: "2px solid white", padding: "10px"}}>
      <span className='displayTitle'>{productId.Title}</span>
      <span className='displayPrice' style={{marginLeft: "10px"}}>${productId.Price}</span>
      <p className='displayDescription'>{productId.Description}</p>
      <button onClick={(e)=>{deleteproduct(productId._id)}}>
                            Delete
                        </button>

    </div>
  )
}

export default ProductPage