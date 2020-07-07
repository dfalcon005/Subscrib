import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Mainpage from './components/MainPage/MainPage'

function App() {
  return (
    <Router>
      <h2>Navbar</h2>
      <div className="container">
        <Mainpage/>
      </div>
    </Router>
  );
}

export default App;
