/* eslint-disable react/prop-types */
import React from 'react';
import { TodoContext } from '../../main/Context/AppContext';
import './searchBar.css';


function ToDoSearch() {
 const {searchValue, setSearchValue} = React.useContext(TodoContext);

  return (
    <div className='search-container'>
      <input
        placeholder='Search' 
        className='search-input'
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </div>
    
  )
}

export { ToDoSearch };
