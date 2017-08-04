import React, {Component} from 'react';

import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <h3 id= "welcome" className = "animated fadeIn">Welcome!</h3>
                    <div id = "about">
                        <img id = "photo" className = "animated fadeIn" src="/images/amulya.jpg"/>
                        <div id = "informal-description" className = "animated fadeIn">
                            <p>My name is Amulya Bhattarai and I'm currently a second year student at the
                               University of Washington's Seattle campus where I am studying Computer Science
                                in the <a href = "https://www.cs.washington.edu/">Paul G. Allen School of Computer Science and Engineering</a>.</p>
                            <p>I've always had a deep fascination with technology and its ability to unlock incredible potential for advancements in society, whether in the tech industry, or in industries that at surface
                                level seem unrelated. In my own career, I hope to gain as much experience as I can so that I can also help
                                provide practical and impactful solutions to not only the problems that people face today, but for the problems of tomorrow as well.</p>
                            <p>Last summer, I was able to gain some work experience as a software development intern at Seattle App Lab, a start-up
                                business that provides mobile application services to other businesses.</p>
                            <p>This summer, I am currently interning at Agilysys, a leader in the hospitality software industry. At Agilysys, I'm
                               working with their rGuest Stay team which develops property management systems for hotels, resorts, casinos, etc...
                               With the Stay team, I'm helping build a web dashboard to display results from their functional and performance test runs.
                               I built a backend service in Java using the Spring framework and connected it to a PostgreSQL database to store data.
                               I'm also involved in building the front-end web application which is being built in React.js</p>
                            <p>Outside of academics and work, I occasionally play (like the image on left) and compose <a href = "https://soundcloud.com/snsrkt">my own music</a> using traditional instruments (guitar, piano, bass) and modern
                               technologies (Logic Pro X). I am also an avid fan of the Seattle Sounders FC, Seattle Seahawks, and Chelsea FC. I also enjoy hiking
                               and spend quite a few weekends outdoors in the beautiful Pacific Northwest.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;