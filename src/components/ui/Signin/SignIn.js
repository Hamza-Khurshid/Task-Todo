import React from 'react';
import signicon from './SignIcon.png';
import './SignInStyle.css';
import { Container, Row, Col } from 'react-grid-system';

class SignIn extends React.Component {
    render() {
      return (
        <Container fluid className='mainContainer'>
          <Row>
              <Col xs={12}>
                <img src={signicon} className='signicon'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <p className='title-signin'>Sign In</p>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <input type={'email'} placeholder='Email' className='input mail-in'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <input type={'password'} placeholder='Password' className='input pass-in'/>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
              <button className='inputBtns signin'>Sign In</button>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <h2>Or</h2>
              </Col>
          </Row>
          <Row>
              <Col xs={12}>
                <button className='inputBtns create'>Create an account</button>
              </Col>
          </Row>
        </Container>
      )
    };
} 

export default SignIn;