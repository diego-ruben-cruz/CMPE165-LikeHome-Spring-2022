import './LoginSignUp.css';
import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
//import { render } from 'react-dom';

function SignUp() {

    return(
        <signup>
            <Header>
            </Header>
        <div className='SignUp'>
            <h1>Sign Up</h1>
            <form>
                <div className='SignUp-Content'>
                    <label class ="LabelHeader"> First Name </label>
                    <input class = "Signup-input" type= "text" placeholder='Enter your First Name'/>
                </div>

                <div className='SignUp-Content'>
                    <label className = "LabelHeader"> Last Name </label>
                    <input class = "Signup-input" type= "text" placeholder='Enter your Last Name'/> 
                </div>


                <div className='SignUp-Content'>
                    <label className = "LabelHeader2"> Email </label>
                    <input class = "Signup-input" type= "text" placeholder='Enter your email'/>
                </div>


                <div className='SignUp-Content'>
                    <label className = "LabelHeader3"> Password </label>
                    <input class = "Signup-input" type= "password" placeholder='Enter a password'/>
                </div>
                   
                      
                <div> 
                    <input className='Button' type="submit" value="Create Account"/>
                </div>

                

                
            </form>

        </div>
        <Footer>
            </Footer> 
        </signup>
    );
}

export default SignUp;