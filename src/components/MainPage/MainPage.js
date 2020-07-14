import React from 'react';
import './MainPage.css';
import Subscription from './Subscription/Subscription';
import AddButton from '../Buttons/AddButton';
import SimpleLineChart from './LineChart/SimpleLineChart';


const mainpage = (props) => (
    <div className="row">
        {/* subscription list */}
        <div className="col-sm-4">
            <h3>My Subscriptions:</h3>
            <Subscription/>
            <AddButton/>
        </div>
        {/* line chart */}
        <div className="col-sm-8" id = "linechart">
            <div className="card">
            <div className="card-body">
                <h3 className="card-title">You are currently spending <span className="informative-label">$9.99/month</span>...</h3>
                    {/* place line chart here */}
                <div><SimpleLineChart/></div>
                </div>
            </div>
            </div>
    </div>
);

export default mainpage;