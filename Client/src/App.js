import React from 'react';
import { Link } from 'react-router-dom';
import About from './pages/About';
import Artwork from "./pages/Artwork";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";


function App() {
  return (
    <div className="App">
      <Navigation>
        <Link exact path="/" component={Home} />
        <Link path="/About" component={About} />
        <Link path="/Artwork" component={Artwork} />
        <Link path="/Categories" component={Categories} />
      </Navigation>
      <Home />
    </div>
  );
}

export default App;
