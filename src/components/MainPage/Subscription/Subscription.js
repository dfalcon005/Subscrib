import React from 'react';
import './Subscription.css'

const subscription = (props) => (
    <div>
        <div className="subscription" onClick={props.detailed}>
            {/* card for subscription */}
            <div className="card custom-card">

                {/* div for top items */}
                <div className="d-flex justify-content-between">
                    <h5>{props.name}</h5>
                    <p className="informative-label">${props.sub_payment}/{props.payment_freq}</p>
                </div>
                {/* next payment info */}
                <p className="descriptive-label">Next payment:</p>
                <p className="informative-label">{props.next_pay}</p>
            </div>
        </div>
    </div>
);

export default subscription;