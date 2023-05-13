import React, {useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const Display = (props) => {
    const {products, setProducts} = props
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            setProducts(res.data)
        })
        .catch(err => console.log(err + " Catch"))
    }, [])

return (
        <Container className='text-center d-flex justify-content-center flex-wrap-reverse flex-row-reverse'>
            {products.map((item, index) => (
                <Row key={index} className='col-2 d-flex justify-content-center bg-dark bg-opacity-50 rounded-pill border border-light bg-primary mx-2 my-1'>
                    <Link className='link-light custom-opacity link-opacity-75-hover' to={`/products/${item._id}`}>
                    <Row className=''>
                    <Col className='displayTitle'>{item.Title}: ${item.Price}</Col>
                    </Row>
                    <Row>
                    <Col className=''>{item.Description}</Col>
                    </Row>
                    </Link>
                </Row>
            ))}
        </Container>
    )
}

export default Display