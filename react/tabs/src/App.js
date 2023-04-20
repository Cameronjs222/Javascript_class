import logo from './logo.svg';
import './App.css';
import Tabs from './componants/Tabs';
import Display from './componants/Display'
import { useState } from 'react';

function App() {
  var tabArr = [
    {title: "Tab one", content: "tab one content is here"},
    {title: "Tab two", content: "tab two content is here"},
    {title: "Tab three", content: "tab three content is here"},
    {title: "Tab four", content: "tab four conent is here"}
  ]

  const [tabs, setTabs] = useState(tabArr)
  const [currentTab, setCurrentTab] = useState(tabs[0].content)
  return (
    <div className="App">
      <div className='tabsContainer'>
      <Tabs tabsData = {tabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      {console.log(currentTab)}
      <Display currentTab = {currentTab}/>
      </div>
    </div>
  );
}

export default App;
