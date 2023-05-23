import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/esm/Table';

const Display = (props) => {
    const { authors, setAuthors, removeFromDom } = props;
    const navigate = useNavigate();


    useEffect(() => {
        axios
            .get('http://localhost:8000/api/authors')
            .then((res) => {
                const sortedAuthors = res.data.sort((a, b) => a.Number - b.Number);
                setAuthors(sortedAuthors);
                setAuthors(res.data);
            })
            .catch((err) => console.log(err + ' Catch'));
        
    }, []);
    const deleteAuthor = (author) => {
        console.log(author)
        axios.delete('http://localhost:8000/api/authors/' + author)
            .then(res => {
                removeFromDom(author)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='text-light py-3'>
            <Container className='text-center'>
                <Table bordered hover className='text-light bg-dark bg-opacity-25'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Actions avaliable</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author, index) => (
                            <tr key={index}>
                                {console.log(author._id + "author")}
                                <td>
                                    {author.Name}
                                </td>
                                <td>
                                <button className='bg-dark text-light bg-opacity-50 border-light mx-2' onClick={(event)=>{deleteAuthor(author._id)}}>Delete</button>
                                <button className='bg-dark text-light bg-opacity-50 border-light mx-2' onClick={(event)=>{navigate(`/authors/edit/${author._id}`)}}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <Link className='link-light' to={'/authors/add'}>Can't Find Your Store?</Link>
        </div>
    );
};

export default Display;
