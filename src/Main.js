import React, { Component } from 'react';
import { Route, a, HashRouter, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Footer from './Footer';

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
                    <nav>
                        <ul className="header">
                            <li><h3>{this.state.devName} Portfolio</h3></li>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Me</NavLink></li>
                            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/resume">Resume</NavLink></li>
                        </ul>
                    </nav>

                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/resume" component={Resume} />
                    </div>

                    <Footer />
                </div>
            </HashRouter>
        )
    }
}

export default Main;