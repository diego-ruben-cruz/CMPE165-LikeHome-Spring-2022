import React from 'react';
import ReactDOM from 'react-dom';
import './SearchPage.css';
import Header from './Header';
import SearchBar from './SearchBar';

function SearchPage(){
    return (
        <>
        <Header/>
        <br/>
        <SearchBar/>
    </>
    );
}

export default SearchPage;