import React, {Component} from 'react';
import './MainPage.css';
import Subscription from './Subscription/Subscription';
import AddButton from '../Buttons/AddButton';
import SimpleLineChart from './LineChart/SimpleLineChart';


class mainpage extends Component{
    state = {
        subscriptions: [
            { id: '1', name: 'Netflix', price: '$9.99/month', next_pay: '7/21'},
            { id: '2', name: 'Spotify', price: '$5.99/month', next_pay: '7/25'},
            { id: '3', name: 'Hulu', price: '$5.99/month', next_pay: '7/29'},
            { id: '4', name: 'Disney+', price: '$9.99/month', next_pay: '7/31'},
            { id: '5', name: 'Gym', price: '$35.99/month', next_pay: '8/21'},
          ],
    }

    render(){
        return(
            <div className="row">
                {/* subscription list */}
                <div className="col-sm-4" id="sub-list-section">
                    <h4>My Subscriptions:</h4>
                    {/* maps subscriptions to create a card for each */}
                    {this.state.subscriptions.map((sub, index) => {
                        return <Subscription
                            name={sub.name}
                            price={sub.price}
                            next_pay={sub.next_pay}/>
                    })}
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
        )
    }
};

export default mainpage;