import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import Mainpage from './components/MainPage/MainPage';

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <h2><Header/></h2>
=======
      <div><Header/></div>
>>>>>>> b196a4f5735285f645a9de3fb66f964c992c9936
      <div className="container">
        <Mainpage/>
      </div>
    </Router>
  );
}

export default App;
