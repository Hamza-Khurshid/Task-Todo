import React, { Component } from 'react';
import "./MyDay.css";
import STAR_IMG from "./star.png";

export default class ComingTask extends Component {
    render() {
        let count = 0, tcount=0;
        const tasks = this.props.MyTasks;
        return (
          <div className='div-upper'>
              {tasks.map(task => {
                return (
                    <div key={task.id} className='margin-class'>
                    { !task.isDone ? 
                      <div>  
                        <div className="border-div">
                          <input type="checkbox" className="checkbox" />
                          <span className="span-text"> {task.title} </span>
                          <img src={STAR_IMG} className="star" alt='Important' />
                        </div>
                        {/* <div className='count'> {++tcount} </div>  */}
                      </div>
                      : <div className='count'></div> 
                    }
                  </div>
                );
              })}
            {/* <div> { (((count > 0) & (tcount === 0)) | (count === 0) ) ? <div>No task remaining!</div> : <div></div>} </div> */}
          </div>
        )
    }
}
