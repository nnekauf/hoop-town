import React from 'react';
import icon from "../images/navbar_icon.png"
import NavBar from "./NavBar"
import { connect } from 'react-redux'
import { showNavBar } from "../actions/navBar.js"

class NavIcon extends React.Component {

    // componentDidMount(){
    //     this.state = { show: false};
    //   }

    handleClick = () => {
        showNavBar()
      }

      render (){
            return(
                <div className="navBarIcon" onClick={this.handleClick} >
                <img id = "icon" src={icon} />
                {/* { this.show ? <NavBar /> : null } */}
                </div>
            );         
      }

}


const mapStateToProps = state => {
    return {
      show: state.show,
      
      
    }
  }
  
  
  export default connect(mapStateToProps)( NavIcon)
