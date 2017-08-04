import React, {Component} from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';

import Agilysys from './descriptions/Agilysys';
import SeattleAppLab from './descriptions/SeattleAppLab';
import IDL from './descriptions/IDL';
import UWSeattle from './descriptions/UWSeattle';
import FriendInsight from './descriptions/FriendInsight';
import Mathnasium from './descriptions/Mathnasium';

import './Experience.css';

class Experience extends Component {
    render() {
        return (
            <div id = "experience" >
                <div className="container-fluid">
                    <h3 className = "animated fadeIn">Experience</h3>
                    <div id = "delayed" className = "animated fadeIn">
                        <p>Click on any of the logos or links below to learn more!</p>
                        <div id="companyLogos">
                            <NavLink to = "/experience/agilysys">
                                <img className = "grow" id = "agilysys" src = "/images/agilysys.jpg"/>
                            </NavLink>
                            <NavLink to = "/experience/idl-research">
                                <img className = "grow" id = "idlresearch" src = "/images/idl-300.png"/>
                            </NavLink>
                            <NavLink to = "/experience/seattle-app-lab">
                                <img className = "grow" id = "seattleapplab" src = "/images/sal.png"/>
                            </NavLink>
                            <NavLink to = "/experience/mathnasium">
                                <img className = "grow" id = "mathnasium" src = "/images/mathnasium.gif"/>
                            </NavLink>
                        </div>
                        <Switch>
                            <Route path = "/experience/agilysys" component = {Agilysys} />
                            <Route path = "/experience/idl-research" component = {IDL} />
                            <Route path = "/experience/seattle-app-lab" component = {SeattleAppLab} />
                            <Route path = "/experience/mathnasium" component = {Mathnasium} />
                        </Switch>
                        <h4>Academic Experience</h4>
                        <div id="academicLogos">
                            <NavLink to = "/experience/uw-seattle">
                                <img className = "grow" id = "uw" src = "/images/allen_school_logo.png"/>
                            </NavLink>
                        </div>
                        <Switch>
                            <Route path = "/experience/uw-seattle" component = {UWSeattle} />
                        </Switch>
                        <h4>Projects</h4>
                        <div id= "projects">
                            <h5><NavLink to = "/experience/friend-insight">Friend Insight [2017]</NavLink></h5>
                        </div>
                        <Switch>
                            <Route path = "/experience/friend-insight" component = {FriendInsight} />
                        </Switch>
                        <h4>Skillsets</h4>
                        <h5>Programming Languages</h5>
                        <ul>
                            <li>
                                Java, Python (working knowledge), Javascript (working knowledge),
                                Typescript (working knowledge)
                            </li>
                        </ul>
                        <h5>Tools and Frameworks</h5>
                        <ul>
                            <li>
                                IntelliJ, Git, Angular 4 (working), React.js (working), Spring Framework,
                                Apache Cordova, PostgreSQL
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default Experience;