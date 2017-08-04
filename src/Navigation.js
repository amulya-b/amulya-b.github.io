import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';

class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1><span id="firstName">Amulya</span> <span id="lastName">Bhattarai</span></h1>
                </div>
                <div id = "nav-buttons">
                    <NavLink exact activeClassName = "active" className = "btn btn-primary" to = "/">Home</NavLink>
                    <NavLink activeClassName = "active" className = "btn btn-primary" to = "/experience"> Experience</NavLink>
                    <NavLink activeClassName = "active" className = "btn btn-primary" to = "/contact"> Contact</NavLink>
                </div>
            </div>
        );
    }
}

export default Navigation;