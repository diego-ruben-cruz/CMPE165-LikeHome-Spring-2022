import './Home.css';
import React from 'react'
import Banner from './Banner';
import RecTable from './RecTable';

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