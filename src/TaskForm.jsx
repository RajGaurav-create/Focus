import React, { useState } from 'react'

const TaskForm = ({addTask}) => {
    const[task,setTask] = useState('');
    const[priority, setPriority]= useState('medium');
    const[category,setCategory] = useState('general');

    const handlesubmit = (e) => {
        e.preventDefault();
       addTask({text: task,priority,category, completed : false});
       setTask('');
       setPriority('medium');
       setCategory('general');
    }
  return (
    <form onSubmit={handlesubmit}  className='form'>
    <div className='input'>
   <input type='text' placeholder=' Enter the task'
   onChange={(e) =>  setTask(e.target.value)} value={task} className='inp'/>
   <button type='submit'>Add Task</button>
    </div>

    <div className='select'>
        <select onChange={(e) => setPriority(e.target.value)} value={priority} className='prio'>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>

        <select onChange={(e) => setCategory(e.target.value)} value={category} className='cato'>
            <option value="general">General</option>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
        </select>
    </div>
    </form>
  )
}

export default TaskForm