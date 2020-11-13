import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import RegisterForm from './pages/Register';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={ () => {
            
            return (
              <Container>
                <Row>
                  <Col>
                    <h1> Cadastro </h1> 
                  </Col>
                </Row>
                <RegisterForm />
              </Container>
            )
          }} />
        </Switch>
        <WhatsappButton />
        <footer>
          <div>Icons made by <a href="https://www.flaticon.com/free-icon/investing_3310790" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
      </BrowserRouter>
    </div>  
  );
}

export default App;
