import React, { Component } from "react";
// import "./navStyle.css";
// import Logo from './../socialfinderapp.png'
import { Link } from "react-router-dom";
// import SignInModel from "./../Components/SignInModel";
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg   ">
        <button
          className="navbar-toggler togglesIconColor"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarTogglerDemo02"
        >
          <ul className="navbar-nav ">
          <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item headerNavigationGap dropdown">
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                to="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Movies
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="#">
                  New In Theaters
                </Link>
                <Link className="dropdown-item" to="#">
                  Coming Soon
                </Link>
                <Link className="dropdown-item" to="#">
                  Highly rated
                </Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item" to="#">
                  Nigerian Movies
                </Link>
              </div>
            </li>
            <li >
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/news">
                News
              </Link>
            </li>
            <li className="nav-item headerNavigationGap">
              <Link className="nav-link " to="/">
                Countries
              </Link>
            </li>
           
          </ul>
          {/* <span className="navbar-text nav-item">
            <Link className="nav-link" to="/login">
              <span style={{ color: "#ffff00 " }}> Sign-in </span>
            </Link>
          </span>
          <span className="navbar-text">
            <img
              className="flag img-fluid"
              src="https://flaglane.com/download/nigerian-flag/nigerian-flag.svg"
              style={{ width: "35px" }}
              alt="Nigeria"
            />
          </span>
          <span className="navbar-text">Nigeria</span> */}
          {/* <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="#">Active</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" href="#">Disabled</a>
  </li>
</ul> */}
        </div>
      </nav>


//  <div class="topnav">
// <div class='SecDiv'>
//   <a class=" pad" href="/">Home</a>
//   <a  class ='pad' href="#news">Movies</a>
//   <a class = 'pad' href="#contact">Actors</a>
//   <a class = 'pad' href="#contact">Show Times </a>
//   <a class = 'pad' href="/news">News </a>
  
// </div>

// </div> 

    );
  }
}

export default Header;

