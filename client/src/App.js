import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import TaskForm from './taskForm';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([])
  const refreshTodos = () => {
    axios.get('http://localhost:3001/api/todos')
    .then((res)=>{
      setTodos(res.data)
    })
    .catch((error)=> {
      console.error(error)
    })
  }
  useEffect(()=> {
    refreshTodos();

  },[])
 return (
    <div className='container'>
      <h1 className='text-center my-4'>To-Do Dashboard</h1>
      <TodoList todos={todos} />
      <TaskForm refreshTodos={refreshTodos}/>
      
    </div>
 );
}

export default App;
