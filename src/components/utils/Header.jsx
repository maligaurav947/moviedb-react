import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="">
        <nav className="pl-5 pr-5 h-[10vh] bg-[#34393f] grid md:xl:2xl:flex items-center justify-between ">
          <Link to="/home">
            <p className="text-6xl font-semibold">MoviewDb</p>
          </Link>
          <ul className="flex gap-[15px] text-4xl text-[#707578]">
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
