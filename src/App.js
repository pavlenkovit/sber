import TodoList from './Todo/TodoList'
import React from 'react'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, complited: true, title: 'Bye bread'},
    {id: 2, complited: false, title: 'Bye oil'},
    {id: 3, complited: false, title: 'Bye milk'}
  ])
  function toggleTodo(id){
    setTodos(
      todos.map(todo => {
        if (todo.id === id)
          todo.complited = !todo.complited;
        return todo
      })
    )
  }
  function remover(id){
    setTodos(todos.filter( todo => todo.id !== id))
  }
  function addTodo(title){
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          cocmpleted: false  
        }
      ])
    )
  }

  return (
    <Context.Provider value = {{remover}}>
    <div className='wrapper'>
      <AddTodo onCreate = {addTodo}/>
      {todos.length ? 
      <TodoList todos = {todos} onToggle = {toggleTodo} />
      :  <p>No todos</p>}
    </div>
    </Context.Provider>
  );
}

export default App;
