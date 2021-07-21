import React, { Component } from 'react';
import Footer from "../components/Footer";
import API from '../utils/API';

class Artwork extends Component {

    state = {
        art: [],
        title: "",
        category: ""
    }

    componentDidMount = () => {
        this.loadArt();
    }

    loadArt = () => {
        API.getArt()
            .then(res => this.setState({
                art: res.data,
                title: "",
                category: ""
            }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

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