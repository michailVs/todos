import React, { useState } from 'react'

const TodoItem = ({create, ...props}) => {
    const [isChecked, setChecked] = useState(false)
    if (props.todo.title.trim().length < 1) {
        return false
    }
    const checkedTodo = () => {
        if (isChecked) {
            setChecked(false)
        } else {
            setChecked(true)
        }
        const newCheck = {...props.todo.id, checked: isChecked}
        create(newCheck)
    }
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <input type="checkbox" onClick={() => checkedTodo()}/>
            {isChecked
            ? <h1 style={{textDecoration: 'line-through'}}>{props.number}. {props.todo.title}</h1>
            : <h1>{props.number}. {props.todo.title}</h1>
            }
            <button onClick={() => props.remove(props.todo)}>Remove</button>
        </div>
    )
}

export default TodoItem