import './Home.css';
import React from 'react'
import Header from './Header';
import Banner from './Banner';
import RecTable from './RecTable';
import SearchBar from './SearchBar';
import Footer from './Footer';
import {makeStyles} from '@material-ui/core';

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
        <Banner/>
        <RecTable/>
        <h1 className='home'>A Home Far Away From Home</h1>
        <div 
        className="h1"
        style={{
          height: 500,
        }}
        >
          <SearchBar/>
        </div>
        
        <Footer/>
    </>
  )
}

export default Home