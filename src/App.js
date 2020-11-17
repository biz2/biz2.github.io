import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import logo from './assets/logo.png'
import NavigationBar from './components/NavigationBar';
import WhatsappButton from './components/WhatsappButton';

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
          <img src={logo} className='nav-logo' alt='biz2 logo' />
          <div>Icons made by <a href="https://www.flaticon.com/free-icon/investing_3310790" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
      </BrowserRouter>
    </div>  
  );
}

export default App;
