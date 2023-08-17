import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="">
        <nav className="pl-5 pr-5 h-[10vh] bg-[#34393f] grid 2xl:xl:md:flex items-center justify-center md:xl:2xl:justify-between text-rose-600">
          <Link to="/home">
            <p className="text-6xl font-medium font-title">MovieNexus</p>
          </Link>
          <ul className="flex gap-[15px] text-4xl font-body">
            <Link to="/home">
              <li>Popular</li>
            </Link>
            <Link to="/top-rated">
              <li>Top Rated</li>
            </Link>
            <Link to="/up-coming">
              <li>UpComing</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
