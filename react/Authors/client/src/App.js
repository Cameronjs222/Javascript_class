import logo from './logo.svg';
import './App.css';
import Display from './componants/Display'
import AuthorForm from './componants/AuthorForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [authors, setAuthors] = useState([])
  const removeFromDom = authorId => {
    setAuthors(authors.filter(authors => authors._id != authorId));
} 
  return (
    <div className='App bg-danger'>
    <div className="App bg-primary bg-opacity-50">
      <header className="">
        <BrowserRouter>
          <Routes>
            <Route element={<Display authors={authors} setAuthors={setAuthors}  removeFromDom={removeFromDom}/>} path='/'/>
            <Route element={<AuthorForm authors={authors} setAuthors={setAuthors}/>} path="/authors/edit/:id"/>
            <Route element={<AuthorForm authors={authors} setAuthors={setAuthors}/>} path="/authors/add"/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
    </div>
  );
}

export default App;
