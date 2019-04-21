import React, {Component} from "react";
import "./MyDay.css";
import { connect } from 'react-redux';
import Task from "../Task";

class MyDay extends Component {

  componentWillMount() {
    this.props.changeTitle('My Day');
  }

  render() {
    const tasks = this.props.todo;
  return (
    <div className='div-upper'>
      { tasks.length>0 ? tasks.map(task => {
        return (
            <div key={task.id}> 
              <div>  
                <div>
                  <Task task={task}/>
                </div>
              </div> 
          </div>
        );
      }) : 
      <h1 style={{color: '#FF3366'}}>
        No task!
      </h1>
    }
    </div>
  );
  }
};

function mapStatetoProps(store) {
  return {
    todo: store.tasks
  }
}

export default connect(mapStatetoProps, null)(MyDay);
