import './LoginSignUp.css';
import React, { Component } from "react";
//import { render } from 'react-dom';

function SignUp() {

    return(
        
        <div className='SignUp'>
            <h1>Sign Up</h1>
            <form>
                <div className='SignUp-Content;'>
                    <input class = "Signup-input" type= "text" placeholder='Enter your email'/>
                    <input class = "Signup-input" type= "password" placeholder='Enter a password'/>
                </div>
            </form>

         </div>
         



    );





}

export default SignUp;
