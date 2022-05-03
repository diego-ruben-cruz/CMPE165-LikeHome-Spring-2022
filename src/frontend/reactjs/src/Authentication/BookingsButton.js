import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const BookingsButton = () => {
  return (
    <Button
    style={{marginLeft: '10px', borderRadius: '50px', marginBottom: "5px"}} variant="contained"

    >
        <Link 
        to="/bookings"
        style={{ 
            textDecoration:'none',
            color:'white'
    
        }}
        >MyBookings</Link>
    </Button>
  )
}

export default BookingsButton
