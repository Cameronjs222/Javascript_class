import { useState } from 'react';
import './App.css';
import BoxForm from "./componants/BoxForm"
import BoxDisplay from './componants/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);
  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes = {setBoxes} />
      <BoxDisplay boxes = {boxes}/>
    </div>
  );
}


export default App;
