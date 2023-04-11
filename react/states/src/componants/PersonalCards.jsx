import React, {useState} from "react";
const PersonalCards = (props) => {
    const {first_name, last_name, user_age, hair}=props
    const [age, setAge] = useState(user_age);
    return(
            <div className="personal">
            <h2>{last_name}, {first_name}</h2>
            <p>Age: {age}</p>
            <p>Hair color {hair}</p>
            <button onClick={() => setAge(age + 1)}>HAPPY BIRTHDAY {first_name}</button>
            </div>
    )
}

export default PersonalCards;