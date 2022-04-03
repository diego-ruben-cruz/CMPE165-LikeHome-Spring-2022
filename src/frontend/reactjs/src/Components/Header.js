import './Header.css';
<<<<<<< Updated upstream
import React, { Component } from 'react';
=======
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LoginModal from '../Authetication/LoginModal';
import { useHistory } from 'react-router-dom';
>>>>>>> Stashed changes

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <>
        <nav className="navHeader">
            <label>LikeHome</label>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
<<<<<<< Updated upstream
                <li><a href="#">Log In</a></li>
                <li><a href="#">Sign Up</a></li>
=======
                <li> <LoginModal/></li>
                <li> <Link to="/signup">Sign Up</Link></li>
>>>>>>> Stashed changes
            </ul>
        </nav>
        </>
    );
}

export default Header;