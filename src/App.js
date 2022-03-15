import React, { Component } from 'react';
import Home from './Home'
import Navbar from './Navbar'
import About from './About'
import Team from './Team'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/team" element={<Team/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
