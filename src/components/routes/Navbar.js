import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Navbar.css";
// import React,{useState} from "react";

function Navbar({ myid, handleOpen }) {
  return (
    <nav className="navbar">
      <h3 className="navbar_brand">coeds-maneuver</h3>

      <ul className="nav_list">
        <li className="nav_item">
          <a href="#Explore" className="nav_link">
            Explore
          </a>
        </li>
        <li className="nav_item">
          <a href="#Liveauction" className="nav_link">
            Liveauction
          </a>
        </li>
        <li className="nav_item">
          <a href="#Create" className="nav_link">
            Create
          </a>
        </li>
        <li className="nav_wallet">
          <button onClick={() => handleOpen(myid)}>Wallet </button>
        </li>
        {/* 
        <div className="nav_search">
          <input type="text" name="search" />
        </div> */}
      </ul>
    </nav>
  );
}

export default Navbar;
