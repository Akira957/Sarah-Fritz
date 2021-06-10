import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from './pages/About';
import Artwork from "./pages/Artwork";
import Categories from "./pages/Categories";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation>
          <Link to="/" component={Home} />
          <Link to="/About" component={About} />
          <Link to="/Artwork" component={Artwork} />
          <Link to="/Categories" component={Categories} />
          <Link to="/Login" component={Login} />
          <Link to="/Register" component={Register} />
        </Navigation>
        <Main />
      </div>
    </Router>
  );
}

export default App;
