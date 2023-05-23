import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const StoreForm = (props) => {
    const { id } = useParams();
    const { authors, setAuthors } = props;
    const [Name, setName] = useState('');
    const [errors, setErrors] = useState('')
    const navigate = useNavigate();
    console.log(errors)

    useEffect(() => {
        if (id) {
            axios
                .get('http://localhost:8000/api/authors/' + id)
                .then((res) => {
                    setName(res.data.Name);
                })
                .catch((err) => {
                    console.log(err)
                });
        }
    }, []);
    

    const submitHandler = (event) => {
        event.preventDefault();

        if (id) {
            axios
                .patch('http://localhost:8000/api/authors/' + id, {
                    Name,
                })
                .then((res) => {
                    console.log(res);
                    navigate('/');
                })
                .catch((err) => {
                    // console.log(err.response.data.errors)
                    console.log(err.response.data)
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    if (errorArr.length > 0){
                        for (const key of Object.keys(errorResponse)) {
                            errorArr.push(errorResponse[key].message)
                        }
                    }
                setErrors(errorArr);
                }
                );
        } else {
            axios
                .post('http://localhost:8000/api/authors', {
                    Name,
                })
                .then((res) => {
                    setAuthors([...authors, res.data]);
                    setName('');
                    navigate('/');
                })
                .catch((err) => {
                    // console.log(err.response.data.errors)
                    const errorResponse = err.response.data.errors;
                    const errorArr = [];
                    for (const key of Object.keys(errorResponse)) {
                        errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
                }
                );
        }
    };

    return (
        <form onSubmit={submitHandler} action="">
            <Container className="d-flex justify-content-center text-center">
                <div action="" className="bg-dark bg-opacity-50 my-3 py-2 px-5">
                    <Row className="">
                        <Col className="my-4">
                            <InputGroup className="">
                                <InputGroup.Text className="" htmlFor="Name">
                                    Name
                                </InputGroup.Text>
                                <Form.Control
                                    className=""
                                    onChange={(e) => setName(e.target.value)}
                                    name="Name"
                                    type="text"
                                    value={Name}
                                />
                            </InputGroup>
                            <p className='text-danger'>{errors}</p>
                        </Col>
                    </Row>
                    
                    <button className="bg-dark text-light bg-opacity-50 border-light">
                        Submit
                    </button>
                </div>
            </Container>
        </form>
    );
};

export default StoreForm;
