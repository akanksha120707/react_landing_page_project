import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="baseWrapper">
      <div className="" id="myNavbar">
        <div className="rightWrapper">
          <div className="homeWrapper">
            <div className="home">HOME</div>
          </div>
          <div className="homeWrapper">
            <div className="home">MENU</div>
          </div>
          <div className="homeWrapper">
            <div className="home">ABOUT</div>
          </div>
          <div className="homeWrapper">
            <div className="home">CONTACT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
