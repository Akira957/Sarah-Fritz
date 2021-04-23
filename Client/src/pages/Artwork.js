import React, { Component } from 'react';
import Footer from "../components/Footer";

class Artwork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            artwork: []
        }
    }

    render() {
        return (
            <div>
                <h1>Pictures of her Artwork</h1>
                <Footer />
            </div>
        )
    }

}

export default Artwork;