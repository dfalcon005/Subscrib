import React, {Component} from 'react';
import './MainPage.css';
import Subscription from './Subscription/Subscription';
import AddButton from '../Buttons/AddButton';
import SimpleLineChart from './LineChart/SimpleLineChart';
import Modal from '../../components/DetailPage/Modal/Modal';
import SubscriptionDetails from '../DetailPage/Modal/SubscriptionDetails/SubscriptionDetails';
import Chart from '../DetailPage/Modal/SubscriptionDetails/Chart';


class mainpage extends Component{
    state = {
        subscriptions: [
            { id: '1', name: 'Netflix', price: '$9.99/month', next_pay: '7/21', sub_type: 'Premium', year_amount: '$120.99'},
            { id: '2', name: 'Spotify', price: '$5.99/month', next_pay: '7/25', sub_type: 'Premium', year_amount: '$120.99'},
            { id: '3', name: 'Hulu', price: '$5.99/month', next_pay: '7/29', sub_type: 'Premium', year_amount: '$120.99'},
            { id: '4', name: 'Disney+', price: '$9.99/month', next_pay: '7/31', sub_type: 'Premium', year_amount: '$120.99'},
            { id: '5', name: 'Gym', price: '$35.99/month', next_pay: '8/21', sub_type: 'Premium', year_amount: '$120.99'},
            { id: '6', name: 'Rent', price: '$150.99/month', next_pay: '8/21', sub_type: 'Premium', year_amount: '$120.99'},
          ],
          detailmode: false
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
        return( 
            <div className="row">

                {/* subscription list */}
                <div className="col-sm-4" id="sub-list-section">
                    <h4>My Subscriptions:</h4>
                    <div className="scrollable-list">
                        {/* maps subscriptions to create a card for each */}
                        {this.state.subscriptions.map((sub) => {
                            return <Subscription
                                key={sub.id}
                                name={sub.name}
                                price={sub.price}
                                next_pay={sub.next_pay}
                                detailed={this.detailmodeHandler.bind(this,sub)}/>
                        })}
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