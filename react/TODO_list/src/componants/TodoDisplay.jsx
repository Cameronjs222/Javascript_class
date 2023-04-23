import React from "react";

const TodoDisplay = (props) => {
    const {todoItems,setItems} = props
    const deleteTodoItem = (index) => {
        const updatedItems = [...todoItems];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        console.log(index, todoItems)

    }
    const completeTodoItem = (index, event) => {
        if (todoItems[index].completed == false){
            todoItems[index].completed = true
            document.getElementById("item-"+index).className += " checked"
        }
        else {
            todoItems[index].completed = false;
            document.getElementById("item-"+index).className = "todo_item"
        }
        console.log(index, todoItems[index].completed, 'complete')

    }
    return (
        <div className="container">
            {console.log(props.boxSize)}
            {todoItems.map((color, index) => {
                var id = "item-"+index
                return (
                <div key={index} className="Todo_items">
                    <label className="todo_item" htmlFor={index} id={id}>{color.text}</label>
                    <input onClick={(event) => {
                        completeTodoItem(index, event)}
                        } type="checkbox" name={index} id={index}/>
                    <button onClick={() => deleteTodoItem(index)}>Delete</button>
                </div>
                )
            }
            )}
        </div>
    )
}

export default TodoDisplay
