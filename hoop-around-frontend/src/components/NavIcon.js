import React from 'react';
import icon from "../images/navbar_icon.png"
import NavBar from "./NavBar"


function NavIcon(){

    return(
        <div className="navBarIcon" onClick={() => {<NavBar/>}} >
        <img id = "icon" src={icon} />
        </div>
    );
}

export default NavIcon