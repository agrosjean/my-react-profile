import React, { Component } from 'react';
import images from './images/travelers.jpg';


class Portfolio extends Component {
    // TODO - Add html with 6 projects, images, github link
    render() {
        return (
            <div>
                <h3>Portfolio</h3>
                <div class="creations">
                    <section className="card">
                        <header>Weather Dashboard</header>
                        <img src={images} alt="Weather Dashboard" />
                        <a href="https://github.com/agrosjean/Weather-Dashboard">
                            Weather</a>
                    </section>
                    <section className="card">
                        <header>Quiz Code</header>
                        <img src={images} alt="Quiz Code" />
                        <a href="https://github.com/agrosjean/Quiz-code">Quiz Code</a>
                    </section>
                    <section className="card">
                        <header>My Day planer</header>
                        <img src="./assets/images/passeteries.jpg" alt="My Day planer" />
                        <a href="https://github.com/agrosjean/My-Day-Planner">My Day Planer</a>
                    </section>
                    <section className="card">
                        <header>Project 1</header>
                        <img src="./assets/images/surf-life.jpg" alt="Project 1" />
                        <a href="https://saibhreas.github.io/parkout/">Project 1</a>
                    </section>
                    <section className="card">
                        <header>Note Taker</header>
                        <img src="./assets/images/rahul-chakraborty.jpg" alt="Note Taker" />
                        <a href="https://github.com/agrosjean/Note-Taker">Note Taker</a>
                    </section>
                    <section className="card">
                        <header>Employee Management Operation</header>
                        <img src="./assets/images/zane-lee-p5bRngFI7ws-unsplash.jpg" alt="Employee Management Operation" />
                        <a href="https://github.com/agrosjean/Employee-Management-Operation">Employee Management
                            Operation</a>
                    </section>
                    <section className="card">
                        <header>The Team Generator</header>
                        <img src="./assets/images/svyatoslav-romanov.jpg" alt="The Team Generator" />
                        <a href="https://github.com/agrosjean/The-A-Team-Generator">The Team Generator</a>
                    </section>
                    <section className="card">
                        <header>Project 2</header>
                        <img src="./assets/images/project2.jpg" alt="Project 2" />
                        <a href="https://github.com/agrosjean/park-time">Project 2</a>
                    </section>
                </div>
            </div>
        )
    }
}

export default Portfolio;