import React, { Component } from 'react';
import fb from './images/facebook.png';
import ld from './images/linkedin.png';
import gh from './images/github.png';

class Footer extends Component {
    render() {
        return (
            <nav>
                <div className="footer">
                    <ul>
                        <li><a href="https://www.facebook.com/alexgrosjean/"><img src={fb} alt='fb' /></a></li>
                        <li><a href="https://www.linkedin.com/in/alexandre-grosjean-4635a1208/"><img src={ld} alt="ld" /></a></li>
                        <li><a href="https://github.com/agrosjean"><img src={gh} alt="gh" /></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Footer;