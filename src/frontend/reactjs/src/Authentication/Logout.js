import { Button } from '@mui/material'
import { signOut } from 'firebase/auth';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { NavigationState } from '../NavigationContext';

const Logout = () => {

    const {setAlert} = NavigationState();
    const history = useHistory();

    const handleSubmit = () => {
        signOut(auth)
          
        setAlert({
          open: true,
          type: "success",
          message: "Come back soon!"
        })

        history.push("/")
      };
      
  return (
    <Button
        style={{marginLeft: '10px', borderRadius: '50px', marginBottom: "5px"}} variant="contained"
        onClick={handleSubmit}

    >
        Logout
    </Button>
  )
}

export default Logout
