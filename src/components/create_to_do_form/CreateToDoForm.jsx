/* eslint-disable react/prop-types */
import React from "react";
import "./createToDoForm.css";
import { IoIosClose } from "react-icons/io";
import { TodoContext } from "../../main/Context/AppContext";

function CreateToDoForm() {
  const {addTodo, setOpenModal} = React.useContext(TodoContext);
  const [showError, setShowError] = React.useState(false);
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const characterLimit = 40;
  const overLimit = newTodoValue.length > characterLimit;

  const onChange = (e) => {
    console.log(`e.target.value ${e.target.value}`);
    setNewTodoValue(e.target.value);
    console.log(`newTodoValue ${newTodoValue}`)
  };
  
  const handleInputValidation = () =>{
    if(overLimit){
      setShowError(true);
    }else{
      setShowError(false);
    }
  }

  React.useEffect(() => {
    let timer;
    if (showError) {
      timer = setTimeout(() => {
        setShowError(false);
      }, 8000); 
    }
    return () => clearTimeout(timer);
  }, [showError]);

  const onSubmit = (event) =>{
    event.preventDefault();
    console.log(`newTodoValue ${newTodoValue}`)
    addTodo(newTodoValue);
    
    setOpenModal(false);
  }

  const onCancel = () =>{
    setOpenModal(false);
  }

  return (
    <div className="create-to-do-container">
        <div className="exit-icon-container">
          <button  className="exit-icon-btn" onClick={onCancel}>
            <IoIosClose className="exit-icon"/> 
          </button>
        </div>

        <h1 className="create-to-to-title">New Task</h1>
        <form className="input-container" onSubmit={onSubmit}>
          <label className="input-title">Write your new task</label>
          <textarea
            className={`input-text ${overLimit ? 'error': ''}`}
            placeholder="Wash the dishes"
            value={newTodoValue}
            onChange={onChange}
          />
          <div className={`carac-text-container ${showError ? 'error' : ''}`}>
            {showError && (
              <p className="error-message">Excediste el limite de caracteres, intenta de nuevo!</p>
            )}
            <p className={`carac-text ${overLimit ? 'error': ''}`}>{newTodoValue.length}/{characterLimit} caracteres</p>
          </div>

          <div className="save-btn-container">
            <button
              type="submit" 
              className="save-btn"
              onClick={handleInputValidation}
            >Guardar</button>
          </div>
        </form>
    </div>
  )
}

export { CreateToDoForm }
