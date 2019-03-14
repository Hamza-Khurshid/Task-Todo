import React, { Component } from 'react';
import './NewTask.css';

export default class NewTask extends Component {
    state = {
        title: '',
        desc: ''
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        let id = Math.random();
        let title = e.target.elements.title.value;
        let desc = e.target.elements.desc.value;

        let todo = {
            id,
            title,
            desc
        }
        console.log(todo);
        this.props.AddTask(todo);
    }

    onChangeInput = name => event => {
        this.setState( {
          [name]: event.target.value
        } )
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