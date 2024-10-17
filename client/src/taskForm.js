import React, {useState} from 'react';
import axios from 'axios';

function TaskForm({refreshTodos}) {
    const [userTask, setTask] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/todos', {task: userTask})
        .then(()=>{
            setTask('')
            refreshTodos()
        })
        .catch((error)=> {
            console.error(error)
        })

    }
        return (
          <div>
           <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={userTask}
                className='form-control'
                onChange={(e)=> setTask(e.target.value)}
                />
                
            <button type="submit" class="btn btn-secondary">Add Task</button>

            </form>
            
          </div>
        )





}

export default TaskForm