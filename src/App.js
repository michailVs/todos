import {useState, useEffect} from 'react'
import TodoForms from './components/TodoForms';
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo])
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
  }
  const removeTodo = (tod) => {
    setTodos(todos.filter(t => t.id !== tod.id))
    const getAtRemoveTodo = JSON.parse(localStorage.getItem('todos'))
    const removeForId = getAtRemoveTodo.filter(t => t.id !== tod.id)
    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(removeForId))
  }
  const localTodo = () => {
    !localStorage.getItem('todos') ? setTodos([]) : setTodos(JSON.parse(localStorage.getItem('todos')))
  }
  useEffect(() => {
    localTodo()
  }, [])
  return (
    <div className="App">
      <TodoForms create={createTodo}/>
      <TodoList remove={removeTodo} todos={todos}/>
    </div>
  );
}

export default App;
