import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import Mainpage from './components/MainPage/MainPage';

function App() {
  return (
    <Router>
      <div><Header/></div>
      <div className="container">
        <Mainpage/>
      </div>
    </Router>
  );
}

export default App;
