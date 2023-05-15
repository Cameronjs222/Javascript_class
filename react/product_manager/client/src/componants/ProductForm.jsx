import axios from 'axios'
import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const ProductForm = (props) => {
    
    const {products, setProducts} = props
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");

    const submitHandler = (event) => {
        event.preventDefault()
        console.log("hello")
        axios.post('http://localhost:8000/api/product', {
            Title,
            Price,
            Description
        })
        .then((res) => {
            setProducts([...products, res.data])
            setTitle("")
            setDescription("")
            setPrice("")
        })
        .catch((err) => console.log(err))
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            Title,
            Price,
            Description
        })
        .then((res) => {
            setProducts([...products, res.data])
            setTitle("")
            setDescription("")
            setPrice("")
        })
        .catch((err) => console.log(err))
        }
    };
return (
    <form onSubmit={submitHandler} action="">
    <Container className='d-flex justify-content-center text-center'>
        <div action="" className='bg-dark bg-opacity-50 my-3 py-2 px-5'>
            <Row className=''>
                <Col className='my-4'>
                <InputGroup className=''>
                    <InputGroup.Text className='col-2 ' htmlFor="Title">Title</InputGroup.Text>
                    <Form.Control className='' onChange={(e) => setTitle(e.target.value)} name='Title' type="text"  value={Title} />
                </InputGroup>
                </Col>
                <Col className='my-4 col-3'>
                <InputGroup className=''>
                    <InputGroup.Text className='col-4' htmlFor="Price">Price</InputGroup.Text>
                    <Form.Control size='sm' onChange={(e) => setPrice(e.target.value)} name='Price' type="number"  value={Price}/>
                </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col className='my-4'>
                <InputGroup>
                    <InputGroup.Text className='' htmlFor="Description">Description</InputGroup.Text>
                    <Form.Control onKeyDown={handleKeyDown} as="textarea" onChange={(e) => setDescription(e.target.value)} name="Description" id="" cols="100" rows="1" value={Description}></Form.Control>
                </InputGroup>
                </Col>
            </Row>
                <button className='bg-dark text-light bg-opacity-50 border-light'>Submit</button>
        </div>
    </Container>
    </form>
        )
}

export default ProductForm