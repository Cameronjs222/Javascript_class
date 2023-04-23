import React from "react";

const TodoDisplay = (props) => {
    const {todoItems,setItems} = props
    const deleteTodoItem = (index, id) => {
        const updatedItems = [...todoItems];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        console.log(todoItems)
    }
    const completeTodoItem = (index, id) => {
        const obj = todoItems[index]
        obj.completed = !obj.completed;
        setItems([...todoItems]);
        console.log(todoItems)

    }
    const styled = (completed) => {
        if (completed === true) {
        return "completed";
        } else {
        return "notCompleted";
        }
    };
    return (
        <div className="container">
            {todoItems.map((todo, index) => {
                console.log(todoItems)
                return (
                <div key={todo.id} className="todo-items">
                    <label className={styled(todoItems[index].completed)} htmlFor={index} id={todo.id}>{todo.text}</label>
                    <input onClick={(event) => {
                        completeTodoItem(index, todo.id)}
                        } type="checkbox" name={index}/>
                    <button onClick={() => deleteTodoItem(index, todo.id)}>Delete</button>
                </div>
                )
            }
            )}
        </div>
    )
}

export default TodoDisplay
