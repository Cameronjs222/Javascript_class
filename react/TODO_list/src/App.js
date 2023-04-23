import { useState } from 'react';
import './App.css';
import BoxForm from "./componants/TodoForm"
import BoxDisplay from './componants/TodoDisplay';

function App() {
  const [todoItems, setItems] = useState([]);
  return (
    <div className="App">
      <BoxForm todoItems={todoItems} setItems = {setItems} />
      <BoxDisplay todoItems = {todoItems} setItems={setItems}/>
    </div>
  );
}


export default App;
