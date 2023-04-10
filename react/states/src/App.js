import './App.css';
import PersonalCards from './componants/PersonalCards'

function App() {
  const personal = {
    Jane: {
      first_name: "Jane",
      last_name: "Doe",
      age: 45,
      hair: "black"
    },
    John: {
      first_name: "John",
      last_name: "Smith",
      age: 88,
      hair: "brown"
    },
    Millard: {
      first_name: "Fillmore",
      last_name: "Millard",
      age: 50,
      hair: "brown"
    },
    Maria: {
      first_name: "Maria",
      last_name: "Smith",
      age: 62,
      hair: "brown"
    }
  }
  return (
    <div className="App">
      <PersonalCards allPersonal={personal}/>
    </div>  
  )
}

export default App;
