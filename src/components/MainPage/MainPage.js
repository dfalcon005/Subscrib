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
        <div class="col-sm-8" id = "linechart">
            <div class="card">
            <div class="card-body">
                <h3 class="card-title">You are currently spending <span className="informative-label">$9.99/month</span>...</h3>
                    {/* place line chart here */}
                <div><SimpleLineChart/></div>
                </div>
            </div>
            </div>
    </div>
);

export default mainpage;