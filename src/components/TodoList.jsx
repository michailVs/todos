import TodoItem from './TodoItem'

const TodoList = ({todos, remove, create}) => {
    if(!todos.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Задачи не найдены
            </h1>
        )
    }
    return (
        <div>
            {todos.map((item, index) => <TodoItem create={create} todo={item} remove={remove} number={index + 1}/>)}
        </div>
    )
}

export default TodoList