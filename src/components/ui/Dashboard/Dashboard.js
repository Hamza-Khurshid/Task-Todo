import React, { Component} from "react";

import { Route, Switch, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import "./DashStyle.css";
import PImage from "./circle.png";
import PinImage from "./push-pin.png";
import PlusImage from "./plus.png";
import PageNotFound from "./NotFound/PageNotFound";
import NewTask from "./NewTask/NewTask";
import MyDay from "./MyDay/MyDay";
import ComingTask from "./ComingTask/ComingTask";
import ImportantTask from "./Important/ImportantTask";
import {withRouter} from 'react-router-dom';
import DoneTask from "./DoneTask/DoneTask";
import { connect } from 'react-redux';
import Task from "./Task";
import EditTask from "./EditTask/EditTask";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      title: 'My Day',
      date: this.getTodaysDate(),
      tasks: this.props.todo
    }
  }

  // addTask = (task) => {
  //   if( task != null ) {
      
  //     alert('Task Added!');
  //     this.props.history.push('/');
  //   }
  // }

  changeTitle = (title) => {
    if(title != null) {
      this.setState( {
        title
      } )
    }
  }

  getTodaysDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = mm + '-' + dd + '-' + yyyy;
    return today;
  }

  onSearchTextChange = name => event => {
    this.setState( {
      [name]: event.target.value
    } )
  }

  render() {
    return (
        <Container fluid>
          
          <Row>
            <Col md={3} >
              
              <Row>
                <Col xs={12} lg={5}>
                  <img src={PImage} className="p-image" alt='profile img' />
                </Col>
                <Col xs={12} lg={7}>
                  <div className="p-data">
                    <span className="fName">M. Fayyaz </span>
                    <p className="date">Joined: 15 sep 2015</p>
                  </div>
                </Col>
              </Row>
              
              <Row>
                <Col xs={12}>
                  <input type="text" value={this.state.search} onChange={this.onSearchTextChange('search')} name='search' placeholder="Search" className="search-input" />
                </Col>
              </Row>

            </Col>
            
            <Col md={9} className="side">
              <h1 className="addnew-text"> {this.state.title} </h1>
              <p className="addnew-p"> {this.state.date} </p>
            </Col>
          </Row>


          <Row>            
            <Col md={3}>
              
              <Row>
                <Col xs={12} className="link-form">
                  <span className="blank-sp"> </span>
                  <Link to="/" className="link-text">
                    <img src={PinImage} alt="pinned" className="pin-image" /> 
                    My Day
                  </Link>
                </Col>
              </Row>
              
              <Row>
                <Col xs={12} className="link-form">
                  <span className="blank-sp"> </span>
                  <Link to="/important" className="link-text">
                    <img src={PinImage} alt="pinned" className="pin-image" />
                    Important
                  </Link>
                </Col>
              </Row>
              
              <Row>
                <Col xs={12} className="link-form">
                  <span className="blank-sp"> </span>
                  <Link to="/done" className="link-text">
                    {" "}
                    <img src={PinImage} alt="pinned" className="pin-image" />{" "}
                    Done Task
                  </Link>
                </Col>
              </Row>
              
              <Row>
                <Col xs={12} className="link-form">
                  <span className="blank-sp"> </span>
                  <Link to="/coming" className="link-text">
                    <img src={PinImage} alt="pinned" className="pin-image" /> Coming Task
                  </Link>
                </Col>
              </Row>
              
              <hr />
              <Row>
                <Col xs={12} className='new-list'>
                  <Link to="/newtask" className='link'>
                    <img src={PlusImage} alt="pinned" className="pin-image" /> New Task
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col md={9}>
            <Switch>
                <Route exact path="/" render = {() =>{
                  return(
                  <MyDay changeTitle={this.changeTitle} />
                  );
                }} />

                <Route path="/important" render = {() =>{
                  return(
                  <ImportantTask changeTitle={this.changeTitle} />
                  );
                }} />

                <Route path="/done" render={() => {
                  return (
                    <DoneTask changeTitle={this.changeTitle} />
                  )
                }} />

                <Route path="/coming" render = {() =>{
                  return(
                  <ComingTask changeTitle={this.changeTitle} />
                  );
                }} />

                <Route path="/newtask" render = {() =>{
                  return(
                  <NewTask changeTitle={this.changeTitle} />
                  );
                }} />

                <Route path="/editTask/:taskID" render={(props) => {
                  return (
                    <EditTask taskID={props.match.params.taskID} changeTitle={this.changeTitle} />
                  );
                }} />
                <Route changeTitle={this.changeTitle} component={PageNotFound} />
            </Switch>
            </Col>
          </Row> 
        </Container>
    );
  }
}

function mapStateToProps(store) {
  return {
    todo: store.tasks
  }
}

export default withRouter(connect(mapStateToProps)(Dashboard));