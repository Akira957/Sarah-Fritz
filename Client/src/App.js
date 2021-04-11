import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Artwork from "./pages/Artwork";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
    {/* <Navigation />
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/About" component={About} />
     <Route path="/Artwork" component={Artwork} />
     <Route path="/Categories" component={Categories} />
   </Switch> */}
   <Home />
   </div>
  );
}

export default App;
