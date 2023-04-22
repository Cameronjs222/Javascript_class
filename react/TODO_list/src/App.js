import logo from './logo.svg';
import './App.css';
import Tabs from './componants/Tabs';
import Display from './componants/Display'
import TabContent_1 from './componants/TabContent_1.jsx';
import TabContent_2 from './componants/TabContent_2';
import TabContent_3 from './componants/TabContent_3';
import TabContent_4 from './componants/TabContent_4';
import { useState } from 'react';

function App() {
  var tabArr = [
    {}
  ]

  const [tabs, setTabs] = useState(tabArr)
  const [currentTab, setCurrentTab] = useState(tabs[0].content)
  return (
    <div className="App">
      <div className='tabsContainer'>
      <Tabs tabsData = {tabs} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      {currentTab}
      {/* {console.log(currentTab)}
      <Display currentTab = {currentTab}/> */}
      </div>
    </div>
  );
}

export default App;
