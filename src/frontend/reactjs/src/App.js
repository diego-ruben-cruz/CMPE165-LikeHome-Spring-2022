<<<<<<< HEAD
import React, { Component } from 'react';
import Home from './Components/Home';
import SearchBar from './Components/SearchBar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
    <Home/>
    </Switch>
    </div>
    </Router>
    //,
    //<Footer/>
    //<HomePage />
    //<SignUp />
    //<Login />
  );
=======
import './App.css';
import React, { Component } from 'react';
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
//import HomePage from "./Components/Homepage";


function App() {
  return(
    //<HomePage />
   <SignUp />

   // <Login />
  
      );

  

>>>>>>> Basic Signup-starting
}

export default App;
