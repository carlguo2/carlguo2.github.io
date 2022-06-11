import React, { Component } from "react";
import '../../App.css';

class Resume extends Component {
    render() {
        return (
            <div className="section">
                <iframe src="/resume.pdf" title="Resume" height="100%" width="100%" />
            </div>
        );
    }
}

export default Resume;