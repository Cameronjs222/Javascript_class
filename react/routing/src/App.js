import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './componants/Home'
import Input from './componants/Input'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:word' element={<Input/>}/>
            <Route path='/:word/:color/:backgroundColor' element={<Input/>}/> 

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
