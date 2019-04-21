import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../Task';

class DoneTask extends Component {

    componentWillMount() {
        this.props.changeTitle('Done Tasks');
    }

    render() {
        
        let tasks = this.props.todo;
        
        return (
            <div className='div-upper'>
              {tasks.map(task => {
                return (
                    <div key={task.id} className='margin-class'>
                    { task.isDone ? 
                      <div>  
                        <Task task={task} />
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

export default connect(mapStateToProps)(DoneTask);