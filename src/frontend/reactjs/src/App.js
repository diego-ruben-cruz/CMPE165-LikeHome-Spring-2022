import './App.css';


import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignUp from "./Components/SignUp";
<<<<<<< Updated upstream
import Login from "./Components/Login";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Header/>
=======

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './Components/Alert';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/signup" component={SignUp} />
        <Route path="/searchpage" component={SearchPage} />
    <Home/>
    </Switch>
    </div>
    <Alert/>
    </Router>
>>>>>>> Stashed changes
    //,
    //<Footer/>
    //<HomePage />
    //<SignUp />
    //<Login />
  );
}

export default App;
