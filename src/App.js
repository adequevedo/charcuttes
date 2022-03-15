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
<<<<<<< HEAD
          <Route exact path="/charcuttes/" element={<Home/>}/>
=======
          <Route exact path="/charcuttes" element={<Home/>}/>
>>>>>>> bd54373332d5e91d029d2c19d00f5ebfd368e795
          <Route exact path="/charcuttes/about" element={<About/>}/>
          <Route exact path="/charcuttes/team" element={<Team/>}/>
        </Routes>
      </Router>
    );
  }
}

export default App;
