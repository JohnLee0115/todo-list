import React, {useState} from 'react'

const TaskForm = (props) => {
    const {taskList} = props;
    const [task, setTask] = useState("");

    const addTask = (e) => {

        e.preventDefault();

        const newTask = {
            task : task
        };

        taskList(newTask);

        setTask("")
    }


    return (
        <form onSubmit={ addTask }>
            <label>Task : </label>
            <input type="text" onChange={ (e) => setTask(e.target.value) } value={task}/>
            <input type="submit" value="Add" />
        </form>
    )
}

export default TaskForm