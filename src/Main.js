import React, { Component } from 'react';
import { Route, a, HashRouter } from 'react-router-dom';
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
                    <nav>
                        <ul className="header">
                            <li><a className="smoothscroll" href="/">Home</a></li>
                            <li><a className="smoothscroll" href="#about">About Me</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                            <li><a className="smoothscroll" href="#contact">Contact</a></li>
                            <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        </ul>
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/portfolio" component={Portfolio} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/resume" component={Resume} />
                    </div>

                    {/* Footer */}
                    <nav>
                        <div className="footer">
                            <ul>
                                <li><a href="https://www.facebook.com/alexgrosjean/">Facebook</a></li>
                                <li><a href="https://www.linkedin.com/in/alexandre-grosjean-4635a1208/">Linkedin</a></li>
                                <li><a href="https://github.com/agrosjean">Github</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </HashRouter>
        )
    }
}

export default Main;