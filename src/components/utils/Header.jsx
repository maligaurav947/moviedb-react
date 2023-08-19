import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50 ">
      <nav className="h-[10vh] container mx-auto 2xl:xl:md:flex  items-center justify-between p-4">
        <div className="flex justify-between ">
          <Link to="/home" className="text-white text-6xl font-bold font-title">
            MovieNexus
          </Link>
          <div>
            <button
              onClick={toggleMenu}
              className={`md:hidden text-gray-300 hover:text-white ml-4 focus:outline-none ${
                isMenuOpen ? "hidden" : "block"
              } transition duration-300 transform hover:scale-110`}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M4 6h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0 5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2z" />
              </svg>
            </button>
            <button
              onClick={toggleMenu}
              className={`md:hidden text-gray-300 hover:text-white ml-4 focus:outline-none ${
                isMenuOpen ? "block" : "hidden"
              } transition duration-300 transform hover:scale-110`}
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19.293 6.293a1 1 0 1 0-1.414-1.414L12 10.586 6.12 4.706a1 1 0 1 0-1.414 1.414L10.586 12l-5.88 5.88a1 1 0 0 0 1.414 1.414L12 13.414l5.88 5.88a1 1 0 0 0 1.414-1.414L13.414 12l5.88-5.88z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`flex flex-col font-body font-normal text-4xl md:flex-row ${
            isMenuOpen ? "block" : "hidden"
          } md:items-center md:w-auto md:flex mt-4 md:mt-0`}
        >
          <Link
            to="/home"
            className="text-gray-300 hover:text-white mb-2 md:mb-0 md:mr-4"
          >
            Popular
          </Link>
          <Link
            to="/top-rated"
            className="text-gray-300 hover:text-white mb-2 md:mb-0 md:mr-4"
          >
            TopRated
          </Link>
          <Link
            to="/up-coming"
            className="text-gray-300 hover:text-white mb-2 md:mb-0 md:mr-4"
          >
            UpComing
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
