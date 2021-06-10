import React, { Component } from 'react';
import Footer from "../components/Footer";
import "./About.css";

class About extends Component {
    render() {
        return (
            <div>
                <h1>About Sarah Fritz</h1>

                <p className="about">Sarah Fritz has collected art for 40 years. It is one of her favorite hobbies that she's with for a very long time. She can tell you where all of her art originates from in her own memory.</p>
                <Footer />
            </div>
        )
    }
}

export default About;