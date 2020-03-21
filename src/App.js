import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <NavBar />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
