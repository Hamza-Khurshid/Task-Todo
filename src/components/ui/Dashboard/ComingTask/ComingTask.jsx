import React, { Component } from 'react';
import "./MyDay.css";
import STAR_IMG from "./star.png";
import { connect } from 'react-redux';

class ComingTask extends Component {

  componentWillMount() {
    this.props.changeTitle('Coming Tasks');
  }

  render() {
      
    let tasks = this.props.todo;

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
                </div>
                : <div className='count'></div> 
              }
            </div>
          );
        })}
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    todo: store.tasks
  }
}

export default connect(mapStateToProps)(ComingTask);