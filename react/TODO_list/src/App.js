import { useState } from 'react';
import './App.css';
import BoxForm from "./componants/BoxForm"
import BoxDisplay from './componants/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);
  const [boxSize, setBoxSize] = useState([])
  return (
    <div className="App">
      <BoxForm boxes={boxes} setBoxes = {setBoxes} boxSize={boxSize} setBoxSize={setBoxSize} />
      <BoxDisplay boxes = {boxes} boxSize = {boxSize}/>
    </div>
  );
}


export default App;
