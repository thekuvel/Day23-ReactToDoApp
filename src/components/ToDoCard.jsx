import styles from "./ToDoCard.module.css"
import PropTypes from 'prop-types';

const Card = ({todo, handleDelete, handleEdit, handleStatus}) =>{

    return(
        <>
            <div className={styles.card}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <div className={styles.status}>

                    <select class="form-select"  onChange={(e)=>{handleStatus(e,todo.id)}} name="status" value={todo.status
                         || ""}>
                        <option value="not-completed">Not Completed</option>
                        <option value="completed">Completed</option>
                    </select>

                </div>

                <div className={styles.buttonContainer}>
                    <button class="btn btn-outline-primary" onClick={()=>{handleEdit(todo.id)}}>Edit</button>
                    <button class="btn btn-outline-danger" onClick={()=>{handleDelete(todo.id)}}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Card