import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';
import Routes from './Routes';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
