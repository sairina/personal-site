import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Resume from './Resume';

function Routes({ location }) {
  return (
    <div className="Routes">
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about-me">
              <AboutMe />
            </Route>
            <Route exact path="/resume">
              <Resume />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}

export default withRouter(Routes);