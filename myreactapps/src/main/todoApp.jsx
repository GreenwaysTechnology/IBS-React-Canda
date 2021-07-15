import React, { useState } from 'react';


export const TodoApp = () => {
    const [items, setItems] = useState([])
    const [text, setText] = useState('')

    //evt refers event object: used to access dom elements inside listner
    const handleChange = evt => {
        //read text box value and update state
        let value = evt.target.value;
        setText(value)
    }
    const handleSubmit = evt => {
        //get textbox value and add into array.
        evt.preventDefault(); //stop submission
        //validation; if there is not text
        if (text.length === 0) {
            return; // false
        }
        //create todo item to push into array
        const todoItem = {
            text: text,
            id: Math.random()
        }
        //push this item into array
        setItems(items.concat(todoItem))
        setText('')

    }

    return <div>
        <h3>Todo App</h3>
        <TodoList items={items} />
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo"> What needs to be done?</label>
            <input id="new-todo" onChange={handleChange} value={text} />
            <button className="btn btn-success">
                Add #{items.length + 1}
            </button>
        </form>
    </div>

}

const TodoList = props => {
    return <ul>
        {
            props.items.map(item => {
                return <li key={item.id}>{item.text}</li>
            })
        }
    </ul>
}