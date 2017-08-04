import React, {Component} from 'react';

import './Descriptions.css';
import {Link} from "react-router-dom";

class Agilysys extends Component {
    render() {
        return (
            <div id = "companyDescription" className = "animated fadeIn">
                <h5>Description of Agilysys</h5>
                <p><a href = "https://agilysys.com">Agilysys</a> is a developer and marketer of proprietary enterprise software and other products for the hospitality
                    industry. The company specializes in point of sale, property management, inventory & procurement, document management,
                    workforce management, and mobile and wireless products</p>
                <h5>When?</h5>
                <p>June 2017 - present</p>
                <h5>Position</h5>
                <p>Software Engineering Intern</p>
                <h5>What Did I Do?</h5>
                <ul>
                    <li>
                        Working with the rGuest Stay QA team to build a web dashboard to display results from the performance and functional test runs.
                    </li>
                    <li>
                        Utilizing REST API Endpoints and Java Database Connectivity in conjunction with Spring Framework to create a backend service to query for test results data from a PostgreSQL database. Assisted in design process for the schema of the database and query builders to dynamically generate SQL queries based on client arguments inputted by the user.
                    </li>
                    <li>
                        Utilizing the React.js library, Axios HTTP client, HTML, CSS for the frontend user interface of the dashboard.
                    </li>
                </ul>
                <Link to="/experience" className = "btn btn-danger">Close Description</Link>
            </div>
        )
    }
}

export default Agilysys;