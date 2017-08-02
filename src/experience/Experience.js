import React, {Component} from 'react';
import {Switch, Route } from 'react-router-dom';

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
            <div>
                <div className="container-fluid">
                    <h4>Experience</h4>
                    <p>Click on any of the logos or links below to learn more!</p>
                    <div id="companyLogos">
                        <a href = "/experience/agilysys">
                            <img id = "agilysys" src = "/images/agilysys.jpg"/>
                        </a>
                        <a href = "/experience/idl-research">
                            <img id = "idlresearch" src = "/images/idl-300.png"/>
                        </a>
                        <a href = "/experience/seattle-app-lab">
                            <img id = "seattleapplab" src = "/images/sal.png"/>
                        </a>
                        <a href = "/experience/mathnasium">
                            <img id = "mathnasium" src = "/images/mathnasium.gif"/>
                        </a>
                    </div>
                    <Switch>
                        <Route path = "/experience/agilysys" component = {Agilysys} />
                        <Route path = "/experience/idl-research" component = {IDL} />
                        <Route path = "/experience/seattle-app-lab" component = {SeattleAppLab} />
                        <Route path = "/experience/mathnasium" component = {Mathnasium} />
                    </Switch>
                    <h4>Academic Experience</h4>
                    <div id="academicLogos">
                        <a href = "/experience/uw-seattle">
                            <img id = "uw" src = "/images/allen_school_logo.png"/>
                        </a>
                    </div>
                    <Switch>
                        <Route path = "/experience/uw-seattle" component = {UWSeattle} />
                    </Switch>
                    <h4>Projects</h4>
                    <div id= "projects">
                        <h5><a href = "/experience/friend-insight">Friend Insight [2017]</a></h5>
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

        )
    }
}

export default Experience;