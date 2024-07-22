/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { MdOutlineDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import './toDoItem.css';

function ToDoItem(props){
    return(
      <li className='to-do-item'>
        <span onClick={props.onComplete}>
          <FaCheck className={`Icon-check ${props.completed && "Icon-check--completed"}`}/>
        </span>
        <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--completed" }`}>{props.text}</p>
        <span onClick={props.onDelete}>
          <MdOutlineDelete className='delete-icon' />
        </span>
      </li>
    );
  }

  ToDoItem.propTypes = {
    text: PropTypes.string.isRequired,
  };

export { ToDoItem };