import React from 'react';
import logo from './main-logo.png';
import fb from './facebook.png';
import mail from './mail.png';
import './HomeStyle.css';
import { Container, Row, Col } from 'react-grid-system';

class Home extends React.Component {
    render() {
      return (
        <Container fluid className='main-container'>
          <Row>
              <Col xs={12}>
                <img src={logo} className='logo'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <h1  className='title'> Welcome To To-Do </h1>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <p className='description'>Create an account to save your tasks <br/> 
                    and access them anywhere. It's Free Forever </p>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <button className='btn fb'> <img src={fb} className='btn-img-fb'/> <span className='fb-text'>Continue With Facebook</span> </button>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
              <button className='btn mail'> <img src={mail} className='btn-img-mail'/> <span className='mail-text'>Continue With Email</span> </button>
              </Col>
          </Row>
        </Container>
      )
    };
} 

export default Home;