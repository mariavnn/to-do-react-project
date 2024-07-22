import { IoMdAddCircleOutline } from "react-icons/io";
import './createToDoBtn.css'

// eslint-disable-next-line react/prop-types
function CreateToDoButton({ setOpenModal }) {
  return (
    <button className="create-task-btn" 
      onClick={() =>{
        console.log('se abrio el modal');
        setOpenModal(state => !state);
      }}>
      <p className="btn-text">Add task</p>
      <IoMdAddCircleOutline className="add-icon" />
    </button>
  )
}

export { CreateToDoButton }
