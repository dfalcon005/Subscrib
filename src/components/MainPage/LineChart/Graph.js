import React, { Component } from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';
import classes from './Graph.css';

const Graph = ( props ) => {

      return ( 
        <div className={classes.wrapper}>    
        <ResponsiveContainer width = "100%" height={350} >
            {props.graph}
        </ResponsiveContainer>
        </div>
      )
  };

  export default Graph;