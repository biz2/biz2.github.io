import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './pages/Home';
import NavigationBar from './components/NavigationBar';
import WhatsappButton from './components/WhatsappButton';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <WhatsappButton /> 
    </div>  
  );
}

export default App;
