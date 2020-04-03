import React from 'react';
import './Routes.css';
import { Route, withRouter } from "react-router-dom";
import { AnimatedSwitch } from "./AnimatedSwitch";
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Routes = withRouter(({ location }) => {
  return (
    <div className="Routes">
      <section className="Routes-section">
        <AnimatedSwitch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </AnimatedSwitch>
      </section>
    </div>
  )
});

export default Routes;