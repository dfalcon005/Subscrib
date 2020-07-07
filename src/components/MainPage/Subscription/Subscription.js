import React from 'react';
import './Subscription.css'

const subs = ['Netflix', 'Hulu', 'Gym', 'Spotify']

const subscription = (props) => (
    <div>
        {/* Loop through all subscriptions */}
        {subs.map((sub, index) => (
            <div className="subscription" key={index}>
                {/* card for subscription */}
                <div className="card">

                    {/* div for top items */}
                    <div className="d-flex justify-content-between">
                        <h5>{sub}</h5>
                        <p className="informative-label">$9.99/month</p>
                    </div>
                    {/* next payment info */}
                    <p className="descriptive-label">Next payment:</p>
                    <p className="informative-label">7/21</p>
                </div>
            </div>
        ))}
    </div>
);

export default subscription;