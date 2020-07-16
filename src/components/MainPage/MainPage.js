import React, {Component} from 'react';
import axios from 'axios';
import './MainPage.css';
import Subscription from './Subscription/Subscription';
import AddButton from '../Buttons/AddButton';
import SimpleLineChart from './LineChart/SimpleLineChart';
import Modal from '../../components/DetailPage/Modal/Modal';
import SubscriptionDetails from '../DetailPage/Modal/SubscriptionDetails/SubscriptionDetails';
import Chart from '../DetailPage/Modal/SubscriptionDetails/Chart';


class mainpage extends Component{
    state = {
        subscriptions: [],
          detailmode: false
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Subscription')
            .then(response => {
                this.setState({subscriptions: response.data});
            });
    }

    // set detail mode true to show detailed view modal
    detailmodeHandler = (sub) => {
        this.setState({detailmode: true});
    }

    // set detail mode false to hide detailed view modal
    detailModeCancelHandler= () => {
        this.setState({detailmode: false})
    }

    render(){

        const subscriptions = this.state.subscriptions.map((sub) => {
            return <Subscription
                key={sub._id}
                name={sub.name}
                sub_payment={sub.sub_payment}
                payment_freq={sub.payment_freq}
                next_pay={sub.next_pay}
                detailed={this.detailmodeHandler}/>
        })

        return( 
            <div className="row">

                {/* subscription list */}
                <div className="col-sm-4" id="sub-list-section">
                    <h4>My Subscriptions:</h4>
                    <div className="scrollable-list">
                        {/* maps subscriptions to create a card for each */}
                        {subscriptions}
                    </div>    
                    <AddButton/>
                </div>

                {/* detail view modal */}
                <Modal show={this.state.detailmode} modalClosed={this.detailModeCancelHandler}>
                    <div class="row">
                        <div class="col-4">
                            <SubscriptionDetails/>
                        </div>
                        <div class="col-4">
                            <Chart />
                        </div>
                        <div class="col-4">
                            <Chart name='Yearly'/>
                        
                        </div>  
                    </div>
                </Modal>

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
        )
    }
};


export default mainpage;