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
    const { stores, setStores } = props;
    const [Name, setName] = useState('');
    const [Number, setNumber] = useState('');
    const [IsOpen, setIsOpen] = useState(false);
    const [nameError, setNameError] = useState('');
    const [numberError, setNumberError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            axios
                .get('http://localhost:8000/api/stores/' + id)
                .then((res) => {
                    setName(res.data.Name);
                    setNumber(res.data.Number);
                    setIsOpen(res.data.IsOpen);
                })
                .catch((err) => console.log(err));
        }
    }, []);

    const submitHandler = (event) => {
        event.preventDefault();

        if (Name.length < 3 && Number <= 0 ) {
            setNumberError('Number must be greater than 0.');
            setNameError('Name must be at least 3 characters long.');
            return;
        }

        if (Name.length < 3) {
            setNameError('Name must be at least 3 characters long.')
            return
        }

        if (Number <= 0) {
            return;
        }

        setNameError('');
        setNumberError('');

        if (id) {
            axios
                .patch('http://localhost:8000/api/stores/' + id, {
                    Name,
                    Number,
                    IsOpen,
                })
                .then((res) => {
                    console.log(res);
                    navigate('/');
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .post('http://localhost:8000/api/stores', {
                    Name,
                    Number,
                    IsOpen,
                })
                .then((res) => {
                    setStores([...stores, res.data]);
                    setName('');
                    setIsOpen(false);
                    setNumber('');
                    navigate('/');
                })
                .catch((err) => console.log(err));
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
                            {nameError && <p className="text-danger">{nameError}</p>}
                        </Col>
                        <Col className="my-4">
                            <InputGroup className="">
                                <InputGroup.Text className="col-4" htmlFor="Number">
                                    Number
                                </InputGroup.Text>
                                <Form.Control
                                    size="sm"
                                    onChange={(e) => setNumber(e.target.value)}
                                    name="Number"
                                    type="number"
                                    value={Number}
                                />
                            </InputGroup>
                            {numberError && <p className="text-danger">{numberError}</p>}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="my-4">
                            <InputGroup>
                                <Form.Check
                                    type="switch"
                                    id="isOpenSwitch"
                                    label="Click here if your store is open"
                                    name="isOpen"
                                    className="text-light"
                                    checked={IsOpen}
                                    onChange={(e) => {
                                        setIsOpen(e.target.checked);
                                    }}
                                />
                            </InputGroup>
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
