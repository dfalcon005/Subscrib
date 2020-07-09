import React from 'react';
import './MainPage.css';
import Subscription from './Subscription/Subscription';
import AddButton from '../Buttons/AddButton';
import SimpleLineChart from './LineChart/SimpleLineChart';


const mainpage = (props) => (
    <div className="row">
        {/* subscription list */}
        <div className="col-4">
            <h3>My Subscriptions:</h3>
            <Subscription/>
            <AddButton/>
        </div>
        {/* line chart */}
        <div className="col-8">
            <h3>You are currently spending <span className="informative-label">$9.99/month</span>...</h3>
            {/* place line chart here */}
            <h1><SimpleLineChart/></h1>
        </div>
    </div>
);

export default mainpage;