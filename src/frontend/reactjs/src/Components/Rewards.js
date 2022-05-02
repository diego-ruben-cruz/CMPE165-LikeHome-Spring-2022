import { Box, Button, TextField, Typography } from '@mui/material';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { auth, db } from '../firebase';
import { NavigationState } from '../NavigationContext';

const Rewards = () => {

    
    const [sealNumber, setSealNumber] = useState(0);

    const {setAlert} = NavigationState();
  
    const docRef = doc(db, "Users", auth.currentUser.email)
      onSnapshot(
        docRef,  
        (doc) => {
          setSealNumber(doc.data().seals)
          console.log(sealNumber)
        });
      

  return (
    <Box 
    p={3}
    style= {{  display: "flex" , flexDirection: "column", gap: "20px", width:500, marginLeft: 450, marginTop: 60, fontSize: 20}}
    >
      
      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 32,
          fontWeight: 'bold',
      }}
      >
        Rewards:
      </Typography>

      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 26,
          
      }}>
          Current Seals: {sealNumber}
      </Typography>
      
      
      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 18,
          
      }}
      >
          Each seal is accumulated by spending $75.
          You earn a free night in a One Bedroom Suite from any hotel after obtaining 7 seals. 
      </Typography>
      
      {sealNumber<7 ? 
    
      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 18,
          
      }} >Remaining Seals until redeemable: {7-sealNumber}
      </Typography>
      :
      <Typography
      style={{
        fontFamily: [
            'Monserrat',
            'sans-serif',
          ].join(','),
          fontSize: 18,
          
      }}
      >Congratulations!!! You have earned enough Seals for a free night!</Typography>
      }

      
    </Box>
   
     
  )
}

export default Rewards
