import {useEffect, useState} from 'react'

const TodoForms = ({create}) => {
    const [todos, setTodos] = useState({title: ''})
    function createTodos(e) {
        e.preventDefault()
        const newTodo = {...todos, id: Date.now()}
        create(newTodo)
        setTodos({title: ''})
    }
    return (
        <div>
            <input
                value={todos.title}
                onChange={e => setTodos({title: e.target.value})}
                type="text" />
            <button onClick={createTodos}>Send</button>
        </div>
    )
}

export default TodoForms