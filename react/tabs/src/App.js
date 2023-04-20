import logo from './logo.svg';
import './App.css';
import Tabs from './componants/Tabs';
import { useState } from 'react';

function App() {
  var tabArr = [
    {title: "Tab one", content: "tab one content is here"},
    {title: "Tab two", content: "tab two content is here"},
    {title: "Tab three", content: "tab three content is here"},
  ]

  const [tabs, setTabs] = useState(tabArr)
  return (
    <div className="App">
      <Tabs tabsData = {tabs}/>
    </div>
  );
}

export default App;
