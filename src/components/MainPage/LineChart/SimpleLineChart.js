import React from 'react';
import ReactDOM from 'react-dom';
//import * as Recharts from 'recharts';
import Graph from './Graph';
import { Container } from 'react-bootstrap';

import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class SimpleLineChart extends React.Component{
	render (){
      const data = [
          {time: 'week 1', subscription: 5},
          {time: 'week 2', subscription: 10},
          {time: 'week 3', subscription: 15},
          {time: 'week 4', subscription: 20},
        ];
  	return (
      <Container>
        <Graph
          graph=
        {<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        
       <XAxis  tick={{ fill: "rgba(0, 0, 0, 0.6)" }} dataKey="time"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="subscription" stroke="#82ca9d" />
      </LineChart>}
        />
      </Container>
    );
  }
}

