import './Home.css';
import React from 'react'
import Header from './Header';
import Banner from './Banner';
import RecTable from './RecTable';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <RecTable/>
        <SearchBar/>
    </>
  )
}

export default Home