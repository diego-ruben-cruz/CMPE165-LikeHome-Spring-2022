import './Header.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginModal from '../Authentication/LoginModal';
import { NavigationState } from "../NavigationContext";
import { auth } from '../firebase';

function Header() {

    const { user} = NavigationState();
    

    return (
        <>
        <nav className="navHeader">
            <label className = "label">LikeHome</label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About Us</a></li>
                <li>{user ? "Logout" : <LoginModal/> }</li>
                
            </ul>
            
        </nav>
        
        </>
    );
}

export default Header;