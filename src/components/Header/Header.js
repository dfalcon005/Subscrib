import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
        return(
            <nav id="mainNavbar" className="navbar navbar-expand-lg navbar-dark bg-dark py-0 navbar-fixed-top">
                <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                </div>
                <div className="mx-auto order-0">
                    <a className="navbar-brand mx-auto" href="#">DUZE</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#dual-collapse2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse w-100 order-3" id="dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                            <FontAwesomeIcon icon={faHome} />&nbsp;
                            {/* <span className="sr-only">(current)</span></a> */} </a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <FontAwesomeIcon icon={faAddressCard} />&nbsp;</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

export default Header;