import "./styles.css"
import {BsCheckCircle, BsTrash3} from "react-icons/bs"

const ToDoItem = ({ name, description, handleComplete, handleDelete, completed }) => {
    return (
        <div className={`container-todo-item ${completed ? "completed" : ""}`}>
            <div>
                <span>{name}</span>
                <p>{description}</p>
            </div>

            <div>
                <button onClick={() => handleComplete()}><BsCheckCircle size={20}/></button>
                <button onClick={() => handleDelete()}><BsTrash3 size={20}/></button>
            </div>
        </div>
    )
}

export default ToDoItem;