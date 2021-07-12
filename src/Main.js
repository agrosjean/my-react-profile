import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            devName: 'Alex Grosjean'
        }
    }

    render() {
        return (
            <HashRouter>
                <div>
                    {/* Header */}
                    <h1>{this.state.devName} Portfolio</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Me</NavLink></li>
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/resume">Resume</NavLink></li>
                    </ul>

                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/resume" component={Resume} />
                    </div>

                    {/* Footer */}
                    <div className="footer">
                        <a href="#">Facebook</a>
                        <a href="#">Linkedin</a>
                        <a href="#">Github</a>
                    </div>

                </div>
            </HashRouter>
        )
    }
}

export default Main;