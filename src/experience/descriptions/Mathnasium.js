import React, {Component} from 'react';

class Mathnasium extends Component {
    render() {
        return (
            <div>
                <div id = "companyDescription">
                    <h5>Description of the Mathnasium</h5>
                    <p>Mathnasium Learning Centers offer customized math tutoring services helping kids in grades K-12
                        develop math skills through homework lessons & tutorials.</p>
                    <h5>When?</h5>
                    <p>January 2015 - July 2015</p>
                    <h5>Position</h5>
                    <p>Math Teacher</p>
                    <h5>What Did I Do?</h5>
                    <ul>
                        <li>
                            Worked with children ages 6-16 to assist in their studies of math, to bolster a confidence in their ability to work independently, and to ignite a passion and love for math.
                        </li>
                    </ul>
                </div>
                <a href="/experience" className = "btn btn-danger">Close Description</a>
            </div>
        )
    }
}

export default Mathnasium;