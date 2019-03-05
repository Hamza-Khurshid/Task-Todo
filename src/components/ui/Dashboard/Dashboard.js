import React, { Component} from "react";

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import "./DashStyle.css";
import PImage from "./circle.png";
import PinImage from "./push-pin.png";
import MyTask from "./MyTask/MyTask";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'My Day',
      date: '12-02-2019'
    }
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
                  <input type="text" placeholder="Search" className="search-input" />
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
            </Col>

            <Col md={9}>
            <Switch>
                <Route exact path="/" component={MyTask} />
                <Route path="/important" component={Important} />
                <Route path="/done" component={Done} />
                <Route path="/coming" component={Coming} />
            </Switch>
            </Col>
          </Row> 
        </Container>
    );
  }
}

const Important = () => {
  return <div>Important Tasks</div>;
};

const Done = () => {
  return <div>Done Tasks</div>;
};

const Coming = () => {
  return <div>Coming Tasks</div>;
};

export default Dashboard;