import React, {Component, useEffect } from 'react';
import axios from 'axios';
import './MainPage.css';
import Subscription from './Subscription/Subscription';
import AddButton from '../Buttons/AddButton';
import SimpleLineChart from './LineChart/SimpleLineChart';
import Modal from '../../components/DetailPage/Modal/Modal';
import SubscriptionDetails from '../DetailPage/Modal/SubscriptionDetails/SubscriptionDetails';
import Chart from '../DetailPage/Modal/SubscriptionDetails/Chart';


class mainpage extends Component{
    constructor(props){
    super(props);

    this.getTotalPayment = this.getTotalPayment.bind(this);
    this.transformedData = this.transformedData.bind(this);

    this.state = {
        subscriptions: [],
        data:[],
        selectedSubscriptionId: null,
        detailmode: false,
        totalMonthlyPayment: 0,
        category: null

    };
    
}

  //Calculates total annual payment for all subscriptions

  function MyComponent(props) {
    useEffect(() => {
        this.getTotalPayment();
      }, []);
    
    return <div></div>;

  }
     
    getTotalPayment = () => {
         if(!this.state.subscriptions.length) return null;
        for(let i=0; i<this.state.subscriptions.length; i++){
            this.state.totalMonthlyPayment += this.state.subscriptions[i].sub_payment;   
        }
        return this.state.totalMonthlyPayment;
    }

    //Calculates the data for the chart 
    transformedData = (data) => {
     //show month of date_purchased on Xaxis
     this.dates_manipulated = this.state.subscriptions.map(new Date(this.state.subscriptions.date_purchased).getMonth() + 1);
     
    
    //  this.state.subscriptions.map(x => {
    //     x.dates_manipulated= new Date(x.date_purchased).getMonth() + 1 // + 1 because for January getMonth returns 0...
    //   });
    
    //show total sub_payment on Yaxis
     this.payment_manipulated = this.state.subscriptions.map(y => {
           y.sub_payment = y.sub_payment;
        }); 
    
        // data = {
        //     dates_manipulated: this.dates_manipulated,
        //     payment_manipulated: this.payment_manipulated
        // }

        // return data;
    }


    // fetches subscriptions
    componentDidMount() {
        axios.get('http://localhost:4000/Subscription')
            .then(response => {
                this.setState({subscriptions: response.data});
            });
    }

    // set detail mode true to show detailed view modal
    subscriptionSelectedHandler = (id) => {
        this.setState({detailmode: true});
        this.setState({selectedSubscriptionId: id})
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
                        {/* displays all subscriptions */}
                        {this.state.subscriptions.map((sub) => {
                            return <Subscription
                                key={sub._id}
                                name={sub.name}
                                sub_payment={sub.sub_payment}
                                payment_freq={sub.payment_freq}
                                next_pay={sub.next_pay}
                                clicked={() => this.subscriptionSelectedHandler(sub._id)}/>
                        })}
                    </div>    

                    <AddButton/>
                </div>

                {/* detail view modal */}
                <Modal id={this.state.selectedSubscriptionId} show={this.state.detailmode} modalClosed={this.detailModeCancelHandler}>
                    <div className="row">
                        <div className="col-4">
                            <SubscriptionDetails id={this.state.selectedSubscriptionId}/>
                        </div>
                        <div className="col-4">
                            <Chart />
                        </div>
                        <div className="col-4">
                            <Chart name='Yearly'/>
                        
                        </div>  
                    </div>
                </Modal>

                {/* line chart */}
                <div className="col-sm-8" id = "linechart">
                    <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">You are currently spending 
                        <span className="informative-label">${this.MyComponent()}</span>...</h3>
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