import './toDoContainer.css';

// eslint-disable-next-line react/prop-types
function ToDoList({ children }) {
  return (
    <div className='to-do-list-container'>
      <ul>
        {children}
      </ul>
    </div>
   
  )
}

export { ToDoList };
