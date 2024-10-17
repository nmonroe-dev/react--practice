import React, {useEffect, useState} from 'react';


function TodoList({todos}) {
    
 return (
    <div>
        <h2>To-Do List</h2>
        <ul className='list-group'>
            {todos.map((todo)=> (
            <li key={todo._id} className='list-group-item'>
                {todo.todoTask} {todo.completed ? '(Completed)' : ''}
            </li>
            ))}
        </ul>
    </div>
 );
}
export default TodoList;