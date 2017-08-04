import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FriendInsight extends Component {
    render() {
        return (
            <div id = "companyDescription" className = "animated fadeIn">
                <ul>
                    <li>Developed using React.js library (Javascript, HTML, CSS) in conjunction with Facebook SDK</li>
                    <li>Accesses <a href = "https://developers.facebook.com/docs/graph-api">Facebook Graph API</a> to get data from
                        users regarding their interactions with other users on Facebook.</li>
                    <li>Allows users to see a dynamically generated ranking of
                        who they interact with the most on Facebook based off their posts, comments, and likes.</li>
                </ul>
                <Link to="/experience" className = "btn btn-danger">Close Description</Link>
            </div>
        )
    }
}

export default FriendInsight;