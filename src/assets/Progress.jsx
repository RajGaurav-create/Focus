import React from 'react'

const Progress = ({count}) => {
  const CompletedTask = count.filter((t) => t.completed).length;
  const totaltasks = count.length;
  const percentage = count.length == 0? 0 : CompletedTask / totaltasks * 100;
  return (
    <div className='progress-tracker'>
      <p>
        {CompletedTask} of {totaltasks} tasks completed
      </p>
  <div className='progress-bar'>
 <div className='progress'
 style={{width: `${percentage}%`}}
 ></div>
  </div>
    </div>
  );
}

export default Progress;