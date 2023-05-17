import React, {useState} from 'react'

import ProductForm from './ProductForm'
import Display from './Display';



const Main = () => {
    const [products, setProducts] = useState([])

return (
    <div>
        <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
        <Display products={products} setProducts={setProducts}/>
    </div>
    )
}

export default Main