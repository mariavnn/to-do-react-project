/* eslint-disable react/prop-types */
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TASKS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const onGoingTodos = totalTodos - completedTodos;
    
    const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
    )
    
    const completeTodo = (text) => {
        const newTodos = [...todos];
    
        const index = newTodos.findIndex(
          (todo) => todo.text == text
        );
    
        newTodos[index].completed = true;
        saveTodos(newTodos);
    };
    
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(
          (todo) => todo.text == text
        );
    
        newTodos.splice(index, 1);
        saveTodos(newTodos);
    };

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
    };
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos, 
            onGoingTodos,
            searchValue, 
            setSearchValue, 
            searchedTodos,
            completeTodo, 
            deleteTodo,
            openModal, 
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }