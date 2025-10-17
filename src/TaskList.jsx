import React from 'react'

const TaskList = ({count, updateTask, deleteTask}) => {
  const toggleComplete = (index) => {
    const updated = {...count[index],completed: !count[index].completed};
    updateTask(updated,index);
  }
  return (
    
<ul className='ol'>
  {count.map((counts,index) =>(
    <li key={index} className='ul'>
      <div>
        <span className='span'>{counts.text}
          <small>({counts.priority}, {counts.category})</small>
        </span>
      </div>
      
      <div className='but'>
        <button onClick={() => toggleComplete(index)}>{counts.completed ? "Undo" : "Complete"}</button>
        <button onClick={()=>deleteTask(index)} className='del'>Delete</button>
      </div>
    </li>
    
  ))};
</ul>

  )
}

export default TaskList