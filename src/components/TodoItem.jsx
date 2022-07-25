import React from 'react'

const TodoItem = (props) => {
    if (props.todo.title.length < 1) {
        return false
    }
    return (
        <div>
            <h1>{props.todo.id}. {props.todo.title}</h1>
            <button onClick={() => props.remove(props.todo)}>Remove</button>
        </div>
    )
}

export default TodoItem