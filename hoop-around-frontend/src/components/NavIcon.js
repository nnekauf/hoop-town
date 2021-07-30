import React from 'react';
import icon from "../images/navbar_icon.png"
// import NavBar from "./components/NavBar"


function NavIcon(){

    return(
        <div className="navBarIcon">
        <img id = "icon" src={icon} />
        </div>
    );
}

export default NavIcon