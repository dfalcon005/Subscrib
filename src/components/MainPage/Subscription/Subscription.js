import React from 'react';
import './Subscription.css';
import moment from 'moment';

const subscription = (props) => (
    <div>
        <div className="subscription" onClick={props.clicked}>
            {/* card for subscription */}
            <div className="card custom-card">

                {/* div for top items */}
                <div className="d-flex justify-content-between">
                    <h5>{props.name}</h5>
                    <p className="informative-label">${props.sub_payment}/{props.payment_freq}</p>
                </div>
                {/* next payment info */}
                <p className="descriptive-label">Next payment:</p>
                <p className="informative-label">{moment(props.next_payment).format('MM/D')}</p>
            </div>
        </div>
    </div>
);

export default subscription;