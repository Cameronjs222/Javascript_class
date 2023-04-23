import React, {useState} from "react";
const TodoForm = (props) => {
    const {todoItems, setItems} = props;
    const [boxColor,setBoxColor] = useState("")
    const submitHandler = (event) => {
        event.preventDefault();
        setItems([...todoItems, {text: boxColor, completed: false}]);
        event.target[0].value = "";}
    return (
        <div className="container">
            <form onSubmit={submitHandler}>
            <div className="input">
            <label htmlFor="boxForm">Add item to your to do list</label>
            <input name="boxForm" onChange={(event) => setBoxColor(event.target.value)} type="text" />
            </div>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default TodoForm