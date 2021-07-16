import React, { Component } from 'react';


class Resume extends Component {
    // TODO - Add html for downloadble resume and list of proeficencies
    render() {
        return (
            <div className="center-container">
                <div className="resume">
                    <h3 className="content-title">Resume</h3>

                    <br />
                    <a href="#">Download my Resume here</a>
                    <br />
                    <br />
                    <br />


                    <p className="about-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        )
    }
}

export default Resume;