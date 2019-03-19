import React, { Component } from 'react';
import "./ImportantTask.css";
import STAR_IMG from "./star.png";
import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(ImportantTask);