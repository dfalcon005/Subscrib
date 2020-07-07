// import React, { Component } from 'react';
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SubscriptionsList from "./components/subscriptionsList.component";

function App() {
  return (
    <Router>
      <div className="container">
        <h2>Welcome to DUZE</h2>
      </div>
      <Route path="/view" component={SubscriptionsList} />
    </Router>
  );
}

export default App;