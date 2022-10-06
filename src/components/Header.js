import React from "react";
import "./header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="main_logo">
      <div className="logo_name">
        <h4>TECH <span>GYAN</span></h4>
      </div>
      
      <Navbar />
    </header>
  );
};

export default Header;
