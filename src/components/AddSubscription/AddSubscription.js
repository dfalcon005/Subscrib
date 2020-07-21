import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './AddSubscription.css';
import Button from '../Buttons/Button';

class addSubscription extends Component{
    state = {
        startDate: new Date(),
        name: '',
        category: '',
        sub_payment: 0,
        date_purchased: Date.now(),
        payment_freq: '',
        sub_type: '',
        trial_ending: Date.now(),
    };

    // handler for form submission
    subscriptionDataHandler = (event) => {
        event.preventDefault();
        
        const subscription = {
            name: this.state.name,
            category: this.state.category,
            sub_payment: this.state.sub_payment,
            date_purchased: this.state.date_purchased,
            payment_freq: this.state.payment_freq,
            sub_type: this.state.sub_type,
            trial_ending: this.state.trial_ending
        }

        axios.post('http://localhost:4000/Subscription/add', subscription)
            .then(response => {
                console.log(response)
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err)
            });
    }

    render(){
        return (
            <div className="newSub-form">
                <form onSubmit={this.subscriptionDataHandler}>
                    <div className="form-group">
                        <h5>Name</h5>
                        <input required value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} type="text" className="form-control" placeholder="Subscription Name"/>
                    </div>
                    <div className="form-group">
                        <h5>Category</h5>
                        <select required 
                            value={this.state.category} 
                            onChange={async (event) => await this.setState({category: event.target.value})}
                            className="custom-select mr-sm-2">
                            <option selected>Category</option>
                            <option value="Music">Music</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Streaming">Streaming</option>
                            <option value="Phone Services">Phone Services</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h5>Payment amount</h5>
                        <input required type="number"
                            step="0.01"
                            className="custom-input"
                            onChange={(event) => this.setState({sub_payment: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <h5>Date Purchased</h5>
                        <input required type="date" 
                            className="custom-input"
                            onChange={(event) => this.setState({date_purchased: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <h5>Payment Frequency</h5>
                        <select required 
                            value={this.state.payment_freq} 
                            onChange={async (event) => await this.setState({payment_freq: event.target.value})}
                            className="custom-select mr-sm-2">
                            <option selected>Payment Frequency</option>
                            <option value="Weekly">Weekly</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h5>Subscription Type</h5>
                        <select required 
                            value={this.state.sub_type} 
                            onChange={async (event) => await this.setState({sub_type: event.target.value})}
                            className="custom-select mr-sm-2">
                            <option selected>Subscription Type</option>
                            <option value="Standard">Standard</option>
                            <option value="Premium">Premium</option>
                            <option value="Family">Family</option>
                            <option value="Trial">Trial</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h5>Trial Ending</h5>
                        <input type="date" 
                            className="custom-input"
                            onChange={(event) => this.setState({trial_ending: event.target.value})}
                        />
                    </div>
                    <div className="d-flex flex-row">
                    <div className="button-padding">
                        <input type="submit" label="Done" className="btn btn-dark done-button"/>
                    </div>
                    <div className="button-padding">
                        <Link to="/">
                            <Button label="Cancel" className="button"/>
                        </Link>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default addSubscription;