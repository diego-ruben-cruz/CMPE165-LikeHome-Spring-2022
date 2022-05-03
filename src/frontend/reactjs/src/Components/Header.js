import './Header.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import LoginModal from '../Authentication/LoginModal';
import RegisterModal from '../Authentication/RegisterModal';
import { NavigationState } from "../NavigationContext";
import { auth } from '../firebase';
import SideDrawer from '../MUI components/SideDrawer';
import {Typography, AppBar, CssBaseline, Toolbar, Tabs, Box, Tab, Button} from '@material-ui/core'
import { withTheme } from '@emotion/react';
import Logout from '../Authentication/Logout';
import ProfileButton from '../Authentication/ProfileButton';
import BookingsButton from '../Authentication/BookingsButton';

const Header = () => {
    const history = useHistory();
    const { user} = NavigationState();
    // const classes = useStyles();
    return (
        <>
        <br/>
        <br/>
        <CssBaseline/>
            <AppBar style={{ background: 'linear-gradient(#1b59b8, #2B6FD4)'}}>
                <Toolbar>
                    
                    <Typography 
                    variant="h5"
                    style={{cursor: "pointer"}}
                    onClick={()=> history.push("/")}
                    >
                        LikeHome
                    
                    </Typography>
                    <Tabs style={{marginLeft: 'auto'}} color = 'white'>
                        
                        
                        {user? <Logout/>: <Button  href='/login/' style={{borderRadius: '50px'}}variant="contained">Log in</Button>}
                        {user? <ProfileButton/>: <Button  href='/signup/'style={{marginLeft: '10px', borderRadius: '50px'}} variant="contained">Sign Up</Button>}   
                        {user? <BookingsButton/>: <Button></Button>}   
                        
                        
                    </Tabs>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
