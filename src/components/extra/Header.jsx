import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <Link to="/home">
            <p className="header-nav-logo">MoviewDb</p>
          </Link>
          <ul className="header-nav-navlink">
            <Link to="/home">
              <li>Popular</li>
            </Link>
            <Link to="/Toprated">
              <li>Top Rated</li>
            </Link>
            <Link to="/Upcoming">
              <li>UpComing</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
