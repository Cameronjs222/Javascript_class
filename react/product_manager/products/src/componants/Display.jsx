import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Display = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        console.log("useEffect")
        axios.get('http://localhost:8000/api/products')
        .then(response => {
            console.log(response)
        })
        .catch(err => console.log(err + " Catch"))
    })
return (
    <div>Display</div>
)
}

export default Display