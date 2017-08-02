import React, { Component } from 'react';
import './App.css';

class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Amulya Bhattarai</h1>
                </div>
                <div id = "nav-buttons">
                    <a className = "btn btn-primary" href = "/">Home</a>
                    <a className = "btn btn-primary" href = "/experience"> Experience</a>
                    <a className = "btn btn-primary" href = "/contact"> Contact</a>
                </div>
            </div>
        );
    }
}

export default Navigation;