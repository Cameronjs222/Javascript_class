import React, {useState} from "react";
const Tabs = ({tabsData, currentTab, setCurrentTab}) => {
    // const [currentTab, setCurrentTab] = useState([])
return(
    <div className="tabsButtons">
        {tabsData.map((tab, index)=>(
            <div className="tabs" key={index} onClick={ (event) => {
                event.preventDefault();
                setCurrentTab(tab.content)
            }
                }>
                <p>{tab.title}</p>

                </div>
        ))}
    </div>
)
}

export default Tabs