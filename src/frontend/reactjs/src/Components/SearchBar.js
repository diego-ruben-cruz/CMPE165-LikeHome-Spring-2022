import React from 'react';
import ReactDOM from 'react-dom';

ReactDom.render(
    <div class = "searchbar">
        <div class = "header">
            <h6>Where To?</h6>
        </div>
        <div class="bar">
            <input type = "text" placeholder = "Location" name = "location"/>
            <input type = "text" placeholder = "Check In" name = "check-in"/>
            <input type = "text" placeholder = "Check Out" name = "check-out"/>
            <input type = "text" placeholder = "Guests" name = "guests"/>
            <button type = "submit" class = "button1">Search</button>
        </div>
    </div>, 
    document.getElementById('searchbar')
)