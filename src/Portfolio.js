import React, { Component } from 'react';
import travelers from './images/travelers.jpg';
import automobile from './images/automobile.jpg';
import passeteries from './images/passeteries.jpg';
import surfLife from './images/surf-life.jpg';
import rahulChakraborty from './images/rahul-chakraborty.jpg';
import zaneLee from './images/zane-lee-p5bRngFI7ws-unsplash.jpg';
import svyatoslavRomanov from './images/svyatoslav-romanov.jpg';
import project2 from './images/project2.jpg';



class Portfolio extends Component {
    // TODO - Add html with 6 projects, images, github link
    render() {
        return (
            <div className="portfolio">
                <h3 className="content-title">Portfolio</h3>
                <div className="creations">
                    <section className="card">
                        <header>Weather Dashboard</header>
                        <img src={travelers} alt="Weather Dashboard" />
                        <a href="https://github.com/agrosjean/Weather-Dashboard">
                            Weather</a>
                    </section>
                    <section className="card">
                        <header>Quiz Code</header>
                        <img src={automobile} alt="Quiz Code" />
                        <a href="https://github.com/agrosjean/Quiz-code">Quiz Code</a>
                    </section>
                    <section className="card">
                        <header>My Day planer</header>
                        <img src={passeteries} alt="My Day planer" />
                        <a href="https://github.com/agrosjean/My-Day-Planner">My Day Planer</a>
                    </section>
                    <section className="card">
                        <header>Project 1</header>
                        <img src={surfLife} alt="Project 1" />
                        <a href="https://saibhreas.github.io/parkout/">Project 1</a>
                    </section>
                    <section className="card">
                        <header>Note Taker</header>
                        <img src={rahulChakraborty} alt="Note Taker" />
                        <a href="https://github.com/agrosjean/Note-Taker">Note Taker</a>
                    </section>
                    <section className="card">
                        <header>Employee Management Operation</header>
                        <img src={zaneLee} alt="Employee Management Operation" />
                        <a href="https://github.com/agrosjean/Employee-Management-Operation">Employee Management
                            Operation</a>
                    </section>
                    <section className="card">
                        <header>The Team Generator</header>
                        <img src={svyatoslavRomanov} alt="The Team Generator" />
                        <a href="https://github.com/agrosjean/The-A-Team-Generator">The Team Generator</a>
                    </section>
                    <section className="card">
                        <header>Project 2</header>
                        <img src={project2} alt="Project 2" />
                        <a href="https://github.com/agrosjean/park-time">Project 2</a>
                    </section>
                </div>
            </div>
        )
    }
}

export default Portfolio;