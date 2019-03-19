import React, { Component } from 'react';
import { connect } from 'react-redux';
import STAR_IMG from '../Important/star.png';

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
                        <div className="border-div">
                          <input type="checkbox" className="checkbox" />
                          <span className="m-span-text"> {task.title} </span>
                          <img src={STAR_IMG} className="imp-star" alt='Important' />
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

export default connect(mapStateToProps)(DoneTask);