import './LoginSignUp.css';
import React, { Component } from "react";
//import { render } from 'react-dom';

function SignUp() {

    return(
        <form className='=SignUpForm'>
        <div className='SignUp'>
            <h1 className='RegistrationHeader'> Registration </h1>
               <div className='SignUp-Content;'>
                    <input class = "Signup-input" type= "text" placeholder='Enter your email'/>
                    <input class = "Signup-input" type= "password" placeholder='Enter a password'/>
                </div>
            

         </div>
         </form>



    );





}

export default SignUp;
