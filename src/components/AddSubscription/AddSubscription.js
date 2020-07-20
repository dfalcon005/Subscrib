import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import CurrencyInput from 'react-currency-input-field';
import "react-datepicker/dist/react-datepicker.css";
import './AddSubscription.css';
import Button from '../Buttons/Button';

class addSubscription extends Component{
    state = {
        startDate: new Date()
    };
     
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render(){
        return (
            <div className="newSub-form">
                <form>
                    <div className="form-group">
                        <h5>Name</h5>
                        <input type="text" className="form-control" placeholder="Subscription Name"/>
                    </div>
                    <div className="form-group">
                        <h5>Category</h5>
                        <select className="custom-select mr-sm-2">
                            <option>Music</option>
                            <option>Phone Services</option>
                            <option>Shopping</option>
                            <option>Streaming</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h5>Payment amount</h5>
                        <CurrencyInput className="custom-input"
                            id="input-example"
                            name="input-name"
                            placeholder="$1,000"
                            prefix="$"
                            allowDecimals={true}
                            decimalsLimit={2}
                            onChange={(value, name) => console.log(value, name)}
                        />
                    </div>
                    <div className="form-group">
                        <h5>Date Purchased</h5>
                        <DatePicker className="custom-input"
                        selected={this.state.startDate}
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <h5>Payment Frequency</h5>
                        <select className="custom-select mr-sm-2">
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Yearly</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h5>Subscription Type</h5>
                        <select className="custom-select mr-sm-2" id="sub_type" name="sub_type">
                            <option>Standard</option>
                            <option>Premium</option>
                            <option>Family</option>
                            <option>Trial</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <h5>Trial Ending</h5>
                        <DatePicker className="custom-input"
                        selected={this.state.startDate}
                        onChange={this.handleChange}/>
                    </div>
                </form>
                <div className="d-flex flex-row">
                    <div className="button-padding">
                        <Button label="Done" className="done-button"/>
                    </div>
                    <div className="button-padding">
                        <Link to="/">
                            <Button label="Cancel" className="button"/>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default addSubscription;