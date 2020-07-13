import React from 'react';
import './Subscription.css'

const subscription = (props) => (
    <div>
        <div className="subscription">
            {/* card for subscription */}
            <div className="card">

                {/* div for top items */}
                <div className="d-flex justify-content-between">
                    <h5>{props.name}</h5>
                    <p className="informative-label">{props.price}</p>
                </div>
                {/* next payment info */}
                <p className="descriptive-label">Next payment:</p>
                <p className="informative-label">{props.next_pay}</p>
            </div>
        </div>
    </div>
);

export default subscription;