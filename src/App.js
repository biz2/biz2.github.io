import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import RegisterForm from './pages/Register';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter , Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';

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
      </BrowserRouter>
    </div>  
  );
}

export default App;
