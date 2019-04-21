import React, { Component } from 'react';
import '../NewTask/NewTask.css';
import { connect } from 'react-redux';
import { editTask } from '../../../../redux/actions/todoActions';
import {withRouter} from 'react-router-dom';

class EditTask extends Component {
    task = {
        id: '5', 
        isImp: false,
        isDone: false,
        isExpanded: false,
        title: 'JavaScript assignment',
        desc: 'A todo app in react submit before 15-03-2019'
    }

    state = {
        task: {},
        title: '',
        desc: ''
    }

    componentWillMount() {
        this.props.changeTitle('Edit Task');
        this.setState( {
            title: this.task.title,
            desc: this.task.desc,
        } )
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        let mTask = this.state.task;

        let id = mTask.id;
        let title = e.target.elements.title.value;
        let desc = e.target.elements.desc.value;
        let isDone = mTask.isDone;
        let isImp = mTask.isImp;
        let isExpanded = mTask.isExpanded;

        if(title !== '' & desc !== ''){
            let todo = {
                id,
                title,
                desc,
                isDone,
                isImp,
                isExpanded
            }
            this.props.editTask(todo);
            this.props.history.push('/');
        } else {
            alert('No empty field allowed!')
        }
    }

    onChangeInput = name => event => {
        this.setState( {
          [name]: event.target.value
        } )
      }

      componentWillReceiveProps(nextProps) {
          
        let tasks = nextProps.tasks;
        console.log(tasks.filter( task => task.id === nextProps.taskID ))
        this.task = tasks.filter( task => task.id === nextProps.taskID );
        this.setState ( { task: this.task[0], title: this.task[0].title, desc: this.task[0].desc } )
      }

    render() {
        
        return (
            <div className='my-task'>
                <form onSubmit={this.onFormSubmit}>
                    <span className='text-here todo-ti'>Title:</span> <br />
                    <input name='title' onChange={this.onChangeInput('title')} className='title' value={this.state.title} type='text' placeholder='Enter Title of todo here' />
                    <p className='text-here' id='desc'>Description:</p> <br />
                    <textarea name='desc' onChange={this.onChangeInput('desc')} rows="8" value={this.state.desc} className='description' type='text' placeholder='Enter Description of todo here' />
                    <br />
                    <button className='add-btn'>Add Your Thing</button>
                </form>
            </div>
        )
    }
};

const getDataFromStore = (store) => {
    let task = store.tasks;
    // store.tasks.filter( task => task.id === this.props.taskID);
    return {
        tasks : task
    }
}
export default withRouter(connect(getDataFromStore, { editTask })(EditTask));