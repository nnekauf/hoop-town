import React, {useState } from 'react';
import { connect } from 'react-redux'
import icon from "../images/navbar_icon.png"
import NavBar from "./NavBar"



const NavIcon = () => {


const [ghow, setShow] = useState(false);
    const handleClick = () => {
      
      setShow(!ghow)
      }

      
            return(
                <div className="navBarIcon" onClick={handleClick} >
                <img id = "icon" src={icon} />
                { ghow ? <NavBar /> : null }
                </div>
            );         
      

}


// const mapStateToProps = state => {
//     return {
//       show: state.show,
      
      
//     }
//   }
  
  
  export default ( NavIcon)
