import React from "react";
import "./navbar.css"

export const navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="search-container">
            <form action="/search" method="get">
                <input type="text" className="search-input" name="q" placeholder="Search 8,000 tutorials"/>
                
            </form>
        </div>
        <div className="text">FreeCodeCamp(A)</div>
        <ul>

            
            <li>
                <div className="Menu-buttons">
                    <a href="/"><button className="navbar-button">Menu</button></a>
                </div>
            </li>
            <li>
                <div className="Signin-buttons">
                    <a href="/signin"><button className="navbar-button">Sign In</button></a>
                </div>
            </li>
        </ul>
    </nav>
    </>
  );
};

export default navbar;
