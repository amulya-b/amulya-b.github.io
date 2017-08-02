import React, {Component} from 'react';

class FriendInsight extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Developed using Angular 4 Framework (Typescript, HTML, CSS)</li>
                    <li>Accesses <a href = "https://developers.facebook.com/docs/graph-api">Facebook Graph API</a> to get data from
                        users regarding their interactions with other users on Facebook. Allows users to see a dynamically generated ranking of
                        who they interact with the most on Facebook based off their posts, comments, and likes.</li>
                </ul>
                <a href="/experience" className = "btn btn-danger">Close Description</a>
            </div>
        )
    }
}

export default FriendInsight;