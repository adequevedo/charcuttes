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
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/charcuttes/" element={<Home/>}/>
            <Route exact path="/charcuttes/about" element={<About/>}/>
            <Route exact path="/charcuttes/team" element={<Team/>}/>
          </Routes>
        </BrowserRouter>

      </Router>
    );
  }
}

export default App;
