import './Home.css';
import React from 'react'
import Header from './Header';
import Banner from './Banner';
import RecTable from './RecTable';
import SearchBar from './SearchBar';
import Footer from './Footer';
import {makeStyles} from '@material-ui/core';
import Checkbox from '../MUI components/Checkbox';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import hotel from './hotel.jpg';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  banner: {
      backgroundImage: "url(./public/LikeHomeBanner.jpg",
  },
}));

const Home = () => {
  const classes= useStyles();

  return (
    <>
        <Header/>
        
       
        <h1 className='home'>A Home Far Away From Home</h1>
        <div 
        className="h1"
        style={{
          height: 500,
        }}
        >
          <SearchBar/>
        </div>
        
        <div>
          <Typography
            style= {{
              fontWeight: "bold",
            }}
          >
              Recommended Hotels:
          </Typography>
          <div>
            <Typography
              style= {{
                fontWeight: "bold",
              }}
            >
                Example 1: Example Hotel
                1234 Sample Street, City, State, Country
            </Typography>
           
            <img 
            className ="rec1"src={hotel}
            >
            </img>
            
              <Link to="/ReservationPage"
              style={{
                marginTop: 100,
              }}
              >Book Now</Link>
                
                

          
          </div>
        </div>

        <Footer>

        </Footer>
    </>
  )
}

export default Home