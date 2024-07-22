/* eslint-disable react/prop-types */
import { ToDoSearch } from "../../components/search_bar/ToDoSearch";
import { ToDoList } from '../../components/to_do_container/ToDoContainer';
import { ToDoItem } from "../../components/to_do_item/ToDoItem";
import { CreateToDoButton } from "../../components/create_to_do_btn/CreateToDoButton"
import { StatusButton } from "../../components/status_btn/StatusButton";
import { Loading } from "../shared/components/loading/Loading";
import { Error } from "../shared/components/error/Error";
import { Modal } from "../shared/components/modal/Modal";
import { CreateToDoForm } from "../../components/create_to_do_form/CreateToDoForm";
import { TodoContext } from "../Context/AppContext";
import { ToDoCounter } from "../../components/to_do_counter/ToDoCounter";
import React from "react";
import { EmptyTodos } from "../shared/components/empty_todo/EmptyTodos";
import { Graph } from "../../components/graph/Graph";



function AppUI() {
    const { 
        completedTodos,
        totalTodos, 
        onGoingTodos,
        loading,
        error, 
        searchedTodos,
        completeTodo,
        deleteTodo, 
        openModal, 
        setOpenModal} = React.useContext(TodoContext);

    const statusButton = [
        {title: 'Total', number: totalTodos}, 
        {title: 'On-going', number: onGoingTodos}, 
        {title: 'Completed', number: completedTodos},     
    ]
  return (
    <>
        <div className="first-section">
           <ToDoCounter/>
        </div>
        <div className="custom-shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      
        <div className="second-section">
            <div className="first-child">
                <div className="to-do-container">
                    <ToDoSearch/> 
                    <ToDoList>
                    {loading && <Loading/>}
                    {error && <Error/>}
                    {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
                        {searchedTodos.map(todo => (
                            <ToDoItem
                                key = {todo.text}
                                text = {todo.text}
                                completed = {todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete ={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </ToDoList>
                    
                    <div className="todo-button-container">
                        <CreateToDoButton 
                            setOpenModal={setOpenModal} 
                        />
                        {openModal && (
                        <Modal>
                            <CreateToDoForm setOpenModal={setOpenModal}/>
                        </Modal>
                        )}
                    </div>
                </div>

            </div>
        
            <div className="second-child">
                <div className="progress-container">
                    <Graph/>
                </div>
                <div className="status-container">
                    <p>Status</p>
                    <div className="status-btn-container">
                        {statusButton.map(status => (
                            <StatusButton
                            key={status.title}
                            title = {status.title}
                            number ={status.number}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default AppUI
