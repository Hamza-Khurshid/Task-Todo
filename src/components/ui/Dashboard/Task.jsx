import React, { Component } from 'react';
import "./MyDay/MyDay.css";
import DELETE_IMG from "../images/delete.png";
import STAR_IMG from '../images/star.png';
import DROP_IMG from "../images/drop-down.png";
import EDIT_IMG from "../images/edit.png";
import DROP_UP_IMG from "../images/drop-up.png";
import { connect } from 'react-redux';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { editTask, deleteTask } from '../../../redux/actions/todoActions';
import EditTask from "./EditTask/EditTask";

class Task extends Component {

    handleChange = ({target}) => {
        let task = this.props.task;
        let nTask = {
            id: task.id,
            title: task.title,
            desc: task.desc,
            isDone: !task.isDone,
            isImp: task.isImp,
            isExpanded: task.isExpanded
        }
        if (target.checked){
            target.removeAttribute('checked');
            this.props.editTask(nTask);
        } else {
           target.setAttribute('checked', true);
           this.props.editTask(nTask);
        }
    }

    isImpClicked = () => {
        let task = this.props.task;
        let nTask = {
            id: task.id,
            title: task.title,
            desc: task.desc,
            isDone: task.isDone,
            isImp: !task.isImp,
            isExpanded: task.isExpanded
        }
        this.props.editTask(nTask);
    }

    deleteBtnClicked = () => {
        let task = this.props.task;
        this.props.deleteTask(task.id);
        alert('Deleted!');
    }

    expandBtnClicked = () => {
        let task = this.props.task;
        let nTask = {
            id: task.id,
            title: task.title,
            desc: task.desc,
            isDone: task.isDone,
            isImp: task.isImp,
            isExpanded: !task.isExpanded
        }
        this.props.editTask(nTask);
    }

    editBtnClicked = () => {
        let task = this.props.task;
        this.props.history.push('/editTask/'+task.id);
        
    }

    render() {
        let { task } = this.props;
        return (
            <div className="div-upper">
                <div className="border-div">
                    <input type="checkbox"
                        className="checkbox"
                        onClick={this.handleChange}
                        defaultChecked={task.isDone}
                    />
                    <img src={EDIT_IMG} onClick={this.editBtnClicked} className="edit-task" alt='Edit' />
                    { task.isDone ? <span className="span-text-done"> {task.title} </span> : <span className="span-text"> {task.title} </span> }
                    { task.isImp ? <img src={STAR_IMG} onClick={this.isImpClicked} className="star imp" alt='Important' /> : <img src={STAR_IMG} onClick={this.isImpClicked} className="star" alt='Important' /> }
                    <img src={DELETE_IMG} onClick={this.deleteBtnClicked} className="delete" alt='Delete Task' />
                    <span className='expand-span'>
                    { task.isExpanded 
                        ? 
                        <span>
                            <img src={DROP_IMG} onClick={this.expandBtnClicked} className="expand" alt='Expand Task' />
                            <div className='description-text'>
                            <br />
                                {task.desc}
                            </div>
                        </span>    
                        : 
                        <img src={DROP_UP_IMG} onClick={this.expandBtnClicked} className="expand" alt='Expand Task' /> }
                    </span>
                </div>
            </div>
        )
    }
};

export default withRouter(connect(null, {editTask, deleteTask} )(Task));