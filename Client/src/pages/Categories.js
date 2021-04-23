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
                <Footer />
            </div>
        )
    }
}

export default Categories;