import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() { 
  return (
    <div className="App">
        <Router>
          <Nav />
          <Route component={About} exact path="/about"/> 
          <Route component={Contact} exact path="/contact"/>
          <Route component={Project} exact path="/project"/>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;