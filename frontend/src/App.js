//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Container from './Container';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
      <Router>
      <div>
        <Container/>
      </div>
      </Router>    
  );
}

export default App;
