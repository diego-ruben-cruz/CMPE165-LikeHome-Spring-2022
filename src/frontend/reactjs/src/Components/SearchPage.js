import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Location from './Location';
import Filter from './Filter';
import './SearchPage.css';

function SearchPage(){

    return (
        <>
        <Header/>
        <br/>
        <SearchBar/>
        <h1 class = "Header"> City, State </h1>
        <Filter/>
        <Location/>
        </>
    );
}

export default SearchPage;