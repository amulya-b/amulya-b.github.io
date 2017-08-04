import React, {Component} from 'react';
import {Link} from "react-router-dom";

class UWSeattle extends Component {
    render() {
        return (
            <div id = "companyDescription" className = "animated fadeIn">
                <h5>University of Washington - Seattle</h5>
                <p>I am currently a second year undergraduate student at the University of Washington - Seattle's Paul G. Allen School of
                    Computer Science and Engineering</p>
                <p>Clubs: <a href = "https://www.cs.washington.edu/acm/">Association for Computing Machinery (Associate Officer)</a>,
                    <a href = "https://www.facebook.com/StartupUW/"> Startup UW</a></p>
                <p>GPA: 3.72/4.00</p>
                <p>Intended Graduation: 2019</p>
                <p>Relevant Coursework</p>
                <ul>
                    <li><a href = "https://courses.cs.washington.edu/courses/cse142/">CSE142: Introduction to Programming in Java I (Autumn 2016)</a></li>
                    <li><a href = "https://courses.cs.washington.edu/courses/cse143/">CSE143: Introduction to Programming in Java II (Winter 2017)</a></li>
                    <li><a href = "https://courses.cs.washington.edu/courses/cse311">CSE311: Foundations of Computing I (Spring 2017)</a></li>
                    <li><a href = "https://courses.cs.washington.edu/courses/cse351">CSE351: The Hardware/Software Interface (Spring 2017)</a></li><br/>
                    <li><a href = "https://sites.math.washington.edu/~m126/">MATH126: Calculus III (Autumn 2016)</a></li>
                </ul>
                <p>Planned Coursework</p>
                <ul>
                    <li><a href = "https://courses.cs.washington.edu/courses/cse332/">CSE332: Data Structures and Parallelism (Autumn 2017)</a></li>
                    <li><a href = "https://courses.cs.washington.edu/courses/cse331/">CSE331: Software Design and Implementation (Winter 2018)</a></li>
                    <li><a href = "https://courses.cs.washington.edu/courses/cse312/">CSE312: Foundations of Computing II (Winter 2018)</a></li><br/>
                    <li><a href = "https://math.washington.edu/courses/2017/autumn/math/308/d">MATH308: Matrix Algebra with Applications (Autumn 2017)</a></li>
                </ul>
                <Link to="/experience" className = "btn btn-danger">Close Description</Link>
            </div>
        )
    }
}

export default UWSeattle;