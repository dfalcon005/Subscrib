import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import Header from './components/Header';
import Mainpage from './components/MainPage/MainPage';

function App() {
  return (
    <Router>
      <h2>Header</h2>
      <div className="container">
        <Mainpage/>
      </div>
    </Router>
  );
}

export default App;
