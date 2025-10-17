import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import Progress from './assets/Progress'
import './Stole.css';

function App() {
  const [count, setCount] = useState([]);
  const addTask = (task) => {
          setCount([...count,task]);
  }
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(count));
  });

  const updateTask = (updated,index) => {
    const newTask = [...count];
    newTask[index] = updated;
    setCount(newTask);
  }

  const deleteTask = (index) => {
    setCount(count.filter((_, i) => i   != index))
}

const deleteAll = () => {
  setCount([]);
}
   return (
    <div className='main'>
    <div className='header'>
    <h1>TaskBuddy</h1>
    <p>Your Friendaly Task Manager</p>
    <TaskForm addTask = {addTask}/>
    <TaskList count= {count} updateTask = {updateTask} deleteTask = {deleteTask}/>
    <Progress count = {count}/>
    <button className='btn' style={{color:"red"}} onClick={deleteAll} >Clear</button>
     </div>
     </div>
  )
}

export default App
