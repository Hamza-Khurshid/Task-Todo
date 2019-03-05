import React from 'react';
import './MyTask.css';

const MyTask = () => {
    return (
        <div className='my-task'>
            <span className='text-here todo-ti'>Title:</span> <br/>
            <input className='title' type='text' placeholder='Enter Title of todo here'/>
            <p className='text-here' id='desc'>Description:</p> <br />
            <textarea rows="8" className='description' type='text' placeholder='Enter Description of todo here'/>
            <br/>
            <button className='add-btn'>Add Your Thing</button>
        </div>
    );
}

export default MyTask;