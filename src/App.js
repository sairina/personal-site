import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <NavBar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
