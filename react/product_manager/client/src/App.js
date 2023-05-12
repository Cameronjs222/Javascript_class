import logo from './logo.svg';
import './App.css';
import Display from './componants/Display';
import Form from './componants/Form'
import ProductPage from './componants/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
function App() {
  const [products, setProducts] = useState([])
  return (
    <div className="App">
      <header className="App-header bg-dark">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<div><Form products={products} setProducts={setProducts}/><Display products={products} setProducts={setProducts}/></div>} />
            <Route path="/products/:_id" element={<ProductPage products={products} setProducts={setProducts}/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
