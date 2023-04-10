import React from "react";
const PersonalCards = (props) => {
    const personal = props.allPersonal
    return(
        <div className="App-header container">
            <h1>personal cards</h1>
            <div className="personal">
            
            <h2>{personal.Jane.last_name}, {personal.Jane.first_name}</h2>
            <p>Age: {personal.Jane.age}</p>
            <p>Hair color {personal.Jane.hair}</p>
            </div>
            <div className="personal">
            
            <h2>{personal.John.last_name}, {personal.John.first_name}</h2>
            <p>Age: {personal.John.age}</p>
            <p>Hair color {personal.John.hair}</p>
            </div>
            <div className="personal">
            
            <h2>{personal.Millard.last_name}, {personal.Millard.first_name}</h2>
            <p>Age: {personal.Millard.age}</p>
            <p>Hair color {personal.Millard.hair}</p>
            </div>
            <div className="personal">
            
            <h2>{personal.Maria.last_name}, {personal.Maria.first_name}</h2>
            <p>Age: {personal.Maria.age}</p>
            <p>Hair color {personal.Maria.hair}</p>
            </div>

        </div>
    )
}

export default PersonalCards;