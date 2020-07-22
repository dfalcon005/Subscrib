// import React, { Component } from 'react';
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import Mainpage from './components/MainPage/MainPage';
import AddSubscription from './components/AddSubscription/AddSubscription';


function App() {
  return (
    <Router>
      <div><Header/></div>
      <div className="container">
        <Route path="/" exact component={Mainpage}/>
        <Route path="/newsubscription" component={AddSubscription}/>
      </div>
    </Router>
  );
}

export default App;