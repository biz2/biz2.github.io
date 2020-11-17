import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import logo from './assets/logo.png'
import NavigationBar from './components/NavigationBar';
import WhatsappButton from './components/WhatsappButton';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <WhatsappButton /> 
        <footer> 
          <Container>
            <Row> 
              <Col className='text-center'> 
                <img src={logo} className='nav-logo' alt='biz2 logo' />  
              </Col> 
              <Col>
                <Nav className='flex-column text-left' > 
                  <h5> SOBRE </h5>
                  <Nav.Link href="#about" > About Us </Nav.Link>
                  <Nav.Link href="#howitworks" > How it Works </Nav.Link>
                  <Nav.Link href="#whyus" > Why Us </Nav.Link>
                </Nav> 
              </Col> 
              <Col>
                <Nav className='flex-column text-left' >
                  <h5> LEGAL </h5>
                  <Nav.Link href="#about" > Regulamentação Crowdfunding </Nav.Link>
                  <Nav.Link href="#howitworks" > Termos de Uso </Nav.Link>
                </Nav> 
              </Col>
              <Col>
                <FaFacebook size={30} className='m-1' color='#1ea4db' />
                <FaLinkedin size={30} className='m-1' color='#1ea4db' />
              </Col>
            </Row>
            <Row> <Col> &nbsp; </Col></Row>
            <Row>
              <Col>
                <div>Icons made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a>, <a href="https://www.flaticon.com/free-icon/investing_3310790" title="ultimatearm">ultimatearm</a>  and <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> </div>
              </Col>
            </Row>
          </Container>
          
        </footer>
      </BrowserRouter>
    </div>  
  );
}

export default App;
