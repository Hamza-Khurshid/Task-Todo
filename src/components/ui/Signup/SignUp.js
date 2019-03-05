import React from 'react';
import signupicon from './SignupIcon.png';
import './SignUpStyle.css';
import { Container, Row, Col } from 'react-grid-system';

class SignUp extends React.Component {
    render() {
      return (
        <Container fluid className='mainContainer'>
          <Row>
              <Col xs={12}>
                <img src={signupicon} className='signicon'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <p className='title-signin'>Sign Up</p>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <input type={'text'} placeholder='Username' className='input'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <input type={'email'} placeholder='Email' className='input'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <input type={'password'} placeholder='Password' className='input pass-in'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <input type={'password'} placeholder='Confirm Password' className='input'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
              <button className='inputBtn'>Sign Up</button>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <p className='member-text'>Already have an acoount ?</p>
              </Col>
          </Row>
        </Container>
      )
    };
} 

export default SignUp;