import React, {Component} from 'react';

class SeattleAppLab extends Component {
    render() {
        return (
            <div>
                <div id = "companyDescription">
                    <h5>Description of Seattle App Lab</h5>
                    <p>Seattle App Lab is a services company that provides industry specific services for businesses with an
                        undivided focus on technology strategy and execution. Seattle App Lab provides strategic consulting,
                        mobile and cloud strategy, business intelligence, custom software development, and staffing services
                        to many companies around the world.</p>
                    <h5>When?</h5>
                    <p>July 2016 - September 2016</p>
                    <h5>Position</h5>
                    <p>Software Development Intern</p>
                    <h5>What Did I Do?</h5>
                    <ul>
                        <li>
                            Worked directly with the head of Seattle AppLab to develop an Android and iOS tool using Apache Cordova for mobile app development in Java and Objective-C. The tool was partially developed with open source code.
                        </li>
                        <li>
                            The custom tool will be used on the upcoming platform Seattle AppLab intends to launch in the coming months.
                        </li>
                        <li>
                            In addition, I helped update the company's website, in .NET (C# and HTML), to help utilize better search engine optimization (SEO) as well as increasing the website's relevance in new markets.
                        </li>
                    </ul>
                </div>
                <a href="/experience" className = "btn btn-danger">Close Description</a>
            </div>
        )
    }
}

export default SeattleAppLab;