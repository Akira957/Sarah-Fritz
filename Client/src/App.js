import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Artwork from "./pages/Artwork";
import Categories from "./pages/Categories";

function App() {
  return (
    <div className="App">
   <Switch>
     <Route exact path="/" component={Home} />
     <Route path="/About" component={About} />
     <Route path="/Artwork" component={Artwork} />
     <Route path="/Categories" component={Categories} />
   </Switch>
   </div>
  );
}

export default App;
