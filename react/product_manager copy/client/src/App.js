import logo from './logo.svg';
import './App.css';
import Display from './componants/Display';
import ProductForm from './componants/ProductForm'
import ProductPage from './componants/ProductPage';
import UpdateProduct from './componants/UpdateProduct';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [products, setProducts] = useState([])
  const removeFromDom = productId => {
    setProducts(products.filter(product => product._id != productId));
}
  return (
    <div className='App bg-danger'>
    <div className="App bg-primary bg-opacity-50">
      <header className="">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div><ProductForm products={products} setProducts={setProducts}/><Display products={products} setProducts={setProducts}/></div>} />
            <Route path="/products/:_id" element={<ProductPage products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>}/>
            <Route element={<UpdateProduct/>} path="/product/edit/:id"/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
    </div>
  );
}

export default App;
