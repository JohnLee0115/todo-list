import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const taskList = (task) => {
    setTasks( tasks => [...tasks, task] )
  }

  const deleteTask = (id) => {
    let left = tasks.slice(0,id)
    let right = tasks.slice(id+1)

    setTasks(left.concat(right))

}

  return (
    <div className="App">
      <TaskForm taskList = { taskList } />
      <h2>To Do List</h2>
      <ul>
        { tasks.map( (task, i) => 
        <>
          <div className='flex'>
              <Task task= {task.task} key={i} id={i} removeFunction={deleteTask} />
          </div>
        </>
        ) }
      </ul>
      
    </div>
  );
}

export default App;
