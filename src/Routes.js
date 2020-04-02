import React from 'react';
import './Routes.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

function Routes({ location }) {
  return (
    <div className="Routes">
      <TransitionGroup className="Routes-transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames={'fade'}
        >
          <section className="Routes-section">
            <Switch>
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
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(Routes);