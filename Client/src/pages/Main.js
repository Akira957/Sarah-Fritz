import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Artwork from "./Artwork";
import Categories from "./Categories";
import Login from "./Login";
import Register from "./Register";


class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/About" component={About} />
                    <Route exact path="/Artwork" component={Artwork} />
                    <Route exact path="/Categories" component={Categories} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                </Switch>
            </div>
        )
    }
}

export default Main;