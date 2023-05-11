import axios from 'axios'
import React, {useState} from 'react'

const Form = (props) => {
    
    const {products, setProducts} = props
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(Title)
        axios.post('http://localhost:8000/api/product', {
            Title,
            Price,
            Description
        })
        .then((res) => {
            console.log("this is the axios.post .then function. We have posted the product.")
            setProducts([...products, res.data])
            setTitle("")
            setDescription("")
            setPrice("")
        })
        .catch((err) => console.log(err))
    }
return (
    <div className='form-container'>
        <form onSubmit={submitHandler} action="">
        <div className='labels'>
        </div>
        <div className='inputs'>
            <span className='span' htmlFor="Title">Title</span>
            <input onChange={(e) => setTitle(e.target.value)} name='Title' type="text" />
            <span className='span' htmlFor="Price">Price</span>
            <input onChange={(e) => setPrice(e.target.value)} name='Price' type="number" />
            <span className='span' htmlFor="Description">Description</span>
            <textarea onChange={(e) => setDescription(e.target.value)} name="Description" id="" cols="30" rows="10"></textarea>
            <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
)
}

export default Form