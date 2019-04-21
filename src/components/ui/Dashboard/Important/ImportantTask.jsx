import React, { Component } from 'react';
import "./ImportantTask.css";
import STAR_IMG from "./star.png";
import { connect } from 'react-redux';
import Task from '../Task';

class ImportantTask extends Component {

    componentWillMount() {
        this.props.changeTitle('Important');
    }

    render() {
        const tasks = this.props.todo;
        return (
            <div className='div-upper'>
              {tasks.map(task => {
                return (
                    <div key={task.id} className='margin-class'>
                    { task.isImp ? 
                      <div>
                        <Task task={task}/>
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

export default connect(mapStateToProps)(ImportantTask);