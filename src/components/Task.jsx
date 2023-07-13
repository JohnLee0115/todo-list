import React, {useState} from 'react'
import './task.css'



const Task = (props) => {

    const {id, removeFunction} = props

    const [completed, setCompleted] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault()
        removeFunction(id)
    }

    return (
        <form>
            <li className={completed?"task":""}>
                {props.task}
                <input className="task" type="checkbox" checked={completed} onChange={ () => setCompleted(!completed) } />
                <button onClick={handleDelete}>Delete</button>
            </li>
        </form>
        
        
    )
}

export default Task