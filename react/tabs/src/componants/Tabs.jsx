import React, {useState} from "react";
const Tabs = ({tabsData}) => {
    const [currentTab, setCurrentTab] = useState([])
    console.log(currentTab)
return(
    <div>
        {tabsData.map((tab, index)=>(
            <a key={index} href="" onClick={ (event) => {
                event.preventDefault();
                setCurrentTab(tab.content)
                console.log(tab.title,currentTab, index)
            }
                }>
                <p>{tab.title}</p>

                </a>
        ))}
    </div>
)
}

export default Tabs