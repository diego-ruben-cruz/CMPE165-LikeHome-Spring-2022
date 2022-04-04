import './Header.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <>
        <nav className="navHeader">
            <label className = "label">LikeHome</label>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About Us</a></li>
                <li> <LoginModal/></li>
                <li> <Link to="/signup">Sign Up</Link></li>
            </ul>
        </nav>
        </>
    );
}

export default Header;