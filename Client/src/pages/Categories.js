import React, { Component } from 'react';
import Footer from "../components/Footer";

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            categories: []
        };
    }

    render() {
        return (
            <div>
                <h1>Artwork Categories</h1>
                <br />
                <h3>All of her art is Separated into these different categories</h3>
                <Footer />
            </div>
        )
    }
}

export default Categories;