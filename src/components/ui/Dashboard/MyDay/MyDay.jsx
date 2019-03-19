import React, {Component} from "react";
import "./MyDay.css";
import STAR_IMG from "./star.png";
import { connect } from 'react-redux';

class MyDay extends Component {
  state = { 
    todos: [],
    isPressed: true
   }

  componentWillMount() {
    this.props.changeTitle('My Day');
  }

  checkHandler = event => {
    event.preventDefault();
    
    const tat = event.target.checkb.value;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    this.setState({
      isPressed: tat
    });

  }
  render() {
    let count = 0, tcount=0;
    const tasks = this.props.todo;
  return (
    <div className='div-upper'>
      {tasks.map(task => {
        return (
            <div key={task.id}> 
              <div>  
                <div className="border-div">
                  <form>
                    <input type="checkbox" onChange={this.checkHandler} name='checkb' value={this.state.isPressed} defaultChecked={task.isDone} className="checkbox" />
                  </form>
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

function mapStatetoProps(store) {
  return {
    todo: store.tasks
  }
}

export default connect(mapStatetoProps, null)(MyDay);
