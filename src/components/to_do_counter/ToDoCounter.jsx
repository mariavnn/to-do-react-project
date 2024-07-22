import { TodoContext } from '../../main/Context/AppContext';
import './toDoCounter.css';
import React from 'react';


function ToDoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return (
    <div className='main-container'>
      <div className='first-container'>
        <h1>Your
          <span className='task-text'> tasks</span>
          </h1> 
      </div>
      <h1 className='completed-text'>completed {completedTodos} of {totalTodos}</h1>
    </div>
  )
}

export  { ToDoCounter };