import React, { Component } from 'react';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from "../components/Footer";
import { Input } from '../components/Form';
import { List, ListItem } from "../components/List";
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

                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Art Title"
                    />
                    <Input
                        value={this.state.category}
                        onChange={this.handleInputChange}
                        name="category"
                        placeholder="Art Category"
                    />
                </form>
                <List>
                    {this.state.art.map(arts => (
                        <ListItem key={arts._id}>
                            <Link to={"/art" + arts._id}>
                                <strong>
                                    {arts.title}
                                </strong>
                                <p>
                                    {arts.category}
                                </p>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <Footer />
            </div>
        )
    }
}

export default Artwork;