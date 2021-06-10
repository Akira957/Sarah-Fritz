import React, { Component } from "react";
import Footer from "../components/Footer";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="title">Collector of Art</h2>
                <h2 className="intro">This is her Collection over the years</h2>
                <Footer />
            </div>
        )
    }
}

export default Home;