import React, {useState} from "react";
const BoxForm = (props) => {
    const {boxes, setBoxes, boxSize, setBoxSize} = props;
    const [boxColor,setBoxColor] = useState("")
    const [size, setSize] = useState("")
    const submitHandler = (event) => {
        console.log(event.target[0].value)
        event.preventDefault();
        setBoxes([...boxes, boxColor])
        setBoxSize([...boxSize,size])
        event.target[0].value = ""
        event.target[1].value = ""
    }
    return (
        <div className="container">
            <form onSubmit={submitHandler}>
            <p>hello world</p>
            <div className="input">
            <label htmlFor="boxForm">What colored box would you like to create?</label>
            <input name="boxForm" onChange={(event) => setBoxColor(event.target.value)} type="text" />
            </div>
            <div className="input">
            <label htmlFor="sizeOption">Chose size of your box if you like (default 50)</label>
            <input type="number" name="sizeOption" onChange={(event)=> setSize(event.target.value)} />
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default BoxForm