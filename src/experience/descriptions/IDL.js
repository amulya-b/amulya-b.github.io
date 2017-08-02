import React, {Component} from 'react';

class IDL extends Component {
    render() {
        return (
            <div>
                <div id = "companyDescription">
                    <h5>Description of the Interactive Data Lab</h5>
                    <p>The mission of the Univerity of Washington's Interactive Data Lab is to enhance people's ability to understand and communicate
                        data through the design of new interactive systems for data visualization and analysis. We study the
                        perceptual, cognitive and social factors affecting data analysis in order to improve the efficiency
                        and scale at which expert analysts work, and to lower barriers for non-experts.</p>
                    <h5>When?</h5>
                    <p>April 2017 - June 2017</p>
                    <h5>Position</h5>
                    <p>Undergraduate Research Assistant</p>
                    <h5>What Did I Do?</h5>
                    <ul>
                        <li>
                            Worked under postdoctoral researcher, Jorge Poco, on a data visualization project.
                        </li>
                        <li>
                            Implemented a web crawler to pull SVG data visualizations from online sources, parse them, and extract their data using Python (Scrapy Framework) and d3.js.
                        </li>
                    </ul>
                </div>
                <a href="/experience" className = "btn btn-danger">Close Description</a>
            </div>
        )
    }
}

export default IDL;