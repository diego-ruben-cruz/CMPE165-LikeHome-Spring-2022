import './LoginSignUp.css';
import React, { Component } from "react";
<<<<<<< HEAD
import Header from './Header';
=======
>>>>>>> Basic Signup-starting
//import { render } from 'react-dom';

function SignUp() {

    return(
<<<<<<< HEAD
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
                    <label className = "LabelHeader"> Email </label>
                    <input class = "Signup-input" type= "text" placeholder='Enter your email'/>
                </div>


                <div className='SignUp-Content'>
                    <label className = "LabelHeader"> Password </label>
                    <input class = "Signup-input" type= "password" placeholder='Enter a password'/>
                </div>
                   
                      
                <div> 
                    <input className='Button' type="submit" value="Create Account"/>
                </div>

                

                
            </form>

        </div>
        </signup>
    );
=======
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





>>>>>>> Basic Signup-starting
}

export default SignUp;
