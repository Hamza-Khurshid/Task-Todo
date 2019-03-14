import React, {Component} from "react";
import "./MyDay.css";
import STAR_IMG from "./star.png";

class MyDay extends Component {

  componentWillMount() {
    this.props.changeTitle('My Day');
  }

  render() {
    let count = 0, tcount=0;
    const tasks = this.props.MyTasks;
  return (
    <div className='div-upper'>
      {tasks.map(task => {
        return (
            <div key={task.id}> 
              <div>  
                <div className="border-div">
                  { task.isDone ? <input type="checkbox" checked='checked' className="checkbox" /> : <input type="checkbox" className="checkbox" /> }
                  { task.isDone ? <span className="span-text-done"> {task.title} </span> : <span className="span-text"> {task.title} </span> }
                  { task.isImp ? <img src={STAR_IMG} className="star imp" alt='Important' /> : <img src={STAR_IMG} className="star" alt='Important' /> }
                </div>
                <div className='count'> {++tcount} </div> 
              </div> 
          </div>
        );
      })}
      {/* <div> { (((count > 0) & (tcount === 0)) | (count === 0) ) ? <div>No task remaining!</div> : <div></div>} </div> */}
    </div>
  );
  }
};

export default MyDay;
