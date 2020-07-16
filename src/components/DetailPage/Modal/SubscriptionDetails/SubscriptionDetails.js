import React from 'react';
import './SubscriptionDetails.css';

const subscriptionDetails = (props) => (
    <div id='thelst'>
        <div>
            <h2>Netflix</h2>
            <p>Streaming</p>
        </div>
        <div class="ui list">
            <div class="item">
            <div class="header"> Next Payment:</div>
                    7/29
            </div>
            <div class="item">
            <div class="header"> Amount per month:</div>
                    $9.99
            </div>
            <div class="item">
            <div class="header"> Amount per year:</div>
                    $119.77
            </div>
            <div class="item">
            <div class="header"> Total spent:</div>
                    $1,000
            </div>
            <div class="item">
            <div class="header"> Subscription Type :</div>
                    7/29
            </div>
        </div>
    </div>
);

export default subscriptionDetails;