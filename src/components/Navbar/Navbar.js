import React, { Component } from "react";
import './Navbar.css'

class Navbar extends Component {
    render() {
        return(
            <header className="site-head">
                <nav className="navbar">
                    <ul>
                        <li className="home-nav">Home</li>
                        <li className="about-nav">About</li>
                        <li  className="coursework-nav">Coursework</li>
                        <li className="project-nav">Projects</li>
                        <li className="resume-nav">Resume</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;