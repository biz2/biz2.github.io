import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import RegisterForm from './pages/Register';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h1> biz2 </h1> 
      <Container>
      <RegisterForm /> 
      </Container>  
    </div>
  );
}

export default App;
