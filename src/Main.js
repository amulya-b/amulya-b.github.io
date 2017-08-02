import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import Experience from './experience/Experience';
import Contact from './contact/Contact';

import './App.css';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path = "/" component = {Home} />
                <Route path = "/experience" component = {Experience} />
                <Route path = "/contact" component = {Contact}/>
            </Switch>
        );
    }
}

export default Main;