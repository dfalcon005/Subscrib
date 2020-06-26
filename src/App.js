import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>MERN-Stack Todo App</h2>
      </div>
    </Router>
  );
}

export default App;
