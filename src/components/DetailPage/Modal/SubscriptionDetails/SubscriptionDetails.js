import React, { Component } from 'react';
import './SubscriptionDetails.css';
import axios from 'axios';

class SubscriptionDetails extends Component {


    // holds single subscription
    state = {
        subscription: null,
    }


    // fetches single subscription with id
    componentDidUpdate () {
        // check to make sure the id prop has been passed
        if ( this.props.id ) {
            // check if subscription is null OR subscription is true and the id is not the same as the id selected
            if ( !this.state.subscription || (this.state.subscription && this.state.subscription._id !== this.props.id) ) {
                axios.get( 'http://localhost:4000/Subscription/find/' + this.props.id )
                    .then( response => {
                        this.setState( { subscription: response.data } );
                    })
                    .catch((err) =>
                        console.log(err)
                    );
                }
        }
    }

    //
    render() {
        // set subscription variable
        let subscription = <h5>Please select a subscription</h5>

        // makes sure that an id is set before starting rendering the details
        if (this.props.id) {
            subscription = <h5>Loading...</h5>
        }

        // renders the details of the single subscription
        if (this.state.subscription) {
            subscription = (
                <div className="card details-pane">
                    <div>
                        <h2>{this.state.subscription.name}</h2>
                        <p>{this.state.subscription.category}</p>
                    </div>
                    <div className="ui list">
                        <div className="item">
                                <h5 className="header"> Next Payment:</h5>
                                {/* <p>{this.state.subscription.next_payment}</p> */}
                                <p>7/21</p>
                        </div>
                        <div className="item">
                                <h5 className="header"> Amount per month:</h5>
                                <p>${this.state.subscription.sub_payment}</p>
                        </div>
                        <div className="item">
                                <h5 className="header"> Amount per year:</h5>
                                <p>${this.state.subscription.annual_payment}</p>
                        </div>
                        <div className="item">
                                <h5 className="header"> Subscription Type:</h5>
                                <p>{this.state.subscription.sub_type}</p>
                        </div>
                    </div>
                </div>
            );
        }
        return subscription;
        
    }
}

export default SubscriptionDetails;