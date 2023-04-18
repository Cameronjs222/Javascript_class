import React, {useState} from "react";
const BoxForm = (props) => {
    const {boxes, setBoxes} = props;
    const [boxColor,setBoxColor] = useState("")
    const submitHandler = (event) => {
        console.log(boxColor)
        event.preventDefault();
        setBoxes([...boxes, boxColor])
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
            <p>hello world</p>
            <label htmlFor="boxForm">What colored box would you like to create?</label>
            <input name="boxForm" onChange={(event) => setBoxColor(event.target.value)} type="text" />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BoxForm