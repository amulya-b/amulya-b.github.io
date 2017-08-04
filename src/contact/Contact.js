import React, {Component} from 'react';

import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h3 className = "animate fadeIn">Contact</h3>
                <div id="contacts" className= "animate fadeIn">
                    <h5><a href = "mailto: amulyab@cs.washington.edu">Email</a></h5>
                    <h5><a href = "https://linkedin.com/in/amulsbhat">LinkedIn</a></h5>
                    <h5><a href = "https://facebook.com/amulsbhat">Facebook</a></h5>
                    <h5><a href = "https://twitter.com/amulsb3">Twitter</a></h5>
                    <h5><a href = "https://instagram.com/amulyab">Instagram</a></h5>
                    <h5><a href = "https://github.com/amulya-b">Github</a></h5>
                </div>
            </div>
        )
    }
}

export default Contact;