import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.css';

ReactDom.render(
    <div class = "searchbar">
        <div class = "header">
            <h6>Where To?</h6>
        </div>
        <div class="bar">
            <input type = "text" placeholder = "Location" class = "text1" name = "location"/>
            <input type = "text" placeholder = "Check In" class = "text2" name = "check-in"/>
            <input type = "text" placeholder = "Check Out" class = "text3"  name = "check-out"/>
            <input type = "text" placeholder = "Guests" class = "text4"  name = "guests"/>
            <button type = "submit" class = "button1">Search</button>
        </div>
    </div>, 
    document.getElementById('searchbar')
)

