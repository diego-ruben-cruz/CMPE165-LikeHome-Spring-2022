import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import TotalLocations from './TotalLocations';
import Footer from './Footer';
import Filter from './Filter';
import SearchResults from './SearchResults';
import Stack from '@mui/material/Stack';
import './SearchPage.css';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from '@material-ui/core/Grid';
import Container from './Container';

function area(){
    var location = document.getElementsByClassName();
}

function SearchPage(){ 
    return (
        <>
        <Header/>
        <Container position={'relative'} zIndex={2}  sx={{position: "absolute",
        top: "-305px", left: "380px"}}>
        <SearchBar/>
        </Container>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Filter/>
        <SearchResults/>
        </Stack>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Footer/>
        </>
    );
}

export default SearchPage;