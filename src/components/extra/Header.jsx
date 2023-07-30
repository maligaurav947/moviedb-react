import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="">
        <nav className=" h-[10vh] bg-[#34393f] grid md:flex xl:2xl:flex items-center justify-around">
          <Link to="/home">
            <p className="text-6xl font-semibold">MoviewDb</p>
          </Link>
          <ul className="flex gap-[15px] text-4xl text-[#707578]">
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
