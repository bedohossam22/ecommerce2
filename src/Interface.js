import React from 'react';
import { FaHeart, FaBriefcase } from 'react-icons/fa';
import Nav from "./Nav";

export default function Interface() {
  return (
    <div className="interface">
    
      <div className="left">
        <h1>Evana</h1>
      <Nav />
      </div>
      <div className="right">
        <input type="search" placeholder="Search for Items" className="search-bar" />
        <FaHeart className="one" />
        <FaBriefcase className="two" />
      </div>
     
    </div>
    
  );
}