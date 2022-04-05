import './Home.css';
import React from 'react'
import Header from './Header';
import Banner from './Banner';
import RecTable from './RecTable';
import SearchBar from './SearchBar';
import Footer from './Footer';


const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <RecTable/>
        <h1 className='home'>A Home Far Away From Home</h1>
        <SearchBar/>
        <Footer/>
    </>
  )
}

export default Home