import './LoginSignUp.css';
import React, { Component } from "react";
import Header from './Header';
//import { render } from 'react-dom';

function Login() {

    return(    
        <login>
           <Header>
            </Header> 
        <div className='SignUp'>
            <h1>Login</h1>
            <form>
                <div className='SignUp-Content'>
                    <label className = "LabelHeader"> Email </label>
                    <input class = "Signup-input" type= "text" placeholder='Enter your email'/>
                </div>


                <div className='SignUp-Content'>
                    <label className = "LabelHeader"> Password </label>
                    <input class = "Signup-input" type= "password" placeholder='Enter a password'/>
                </div>
                    
                <div> 
                    <input className='Button' type="submit" value="Login"/>
                </div>

                <div class ="Signup_link">
                    Don't have an account? <a href="#"> Sign Up </a>
                </div>

                <div class ="pass_forgot">
                    <a href="#"> Forget your Password? </a>
                </div>
                
            </form>

        </div>
        </login>
    );
}

export default Login;
