import './App.css';
import PersonalCards from './componants/PersonalCards'

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
function App() {
  return (

    <div className="App">
      <h1>Personal Cards</h1>
      <PersonalCards 
      first_name= {personal['Jane'].first_name}
      last_name= {personal['Jane'].last_name}
      user_age= {personal['Jane'].age}
      hair = {personal['Jane'].hair}
      />
      <PersonalCards 
      first_name= {personal['John'].first_name}
      last_name= {personal['John'].last_name}
      user_age= {personal['John'].age}
      hair = {personal['John'].hair}
      />
      <PersonalCards 
      first_name= {personal['Millard'].first_name}
      last_name= {personal['Millard'].last_name}
      user_age= {personal['Millard'].age}
      hair = {personal['Millard'].hair}
      />
      <PersonalCards 
      first_name= {personal['Maria'].first_name}
      last_name= {personal['Maria'].last_name}
      user_age= {personal['Maria'].age}
      hair = {personal['Maria'].hair}
      />
    </div>  
  )
}

export default App;
