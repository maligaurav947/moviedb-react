import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; 2023 Your MovieDB App. All rights reserved.</p>
        <div className="mt-4">
          <Link to="/" className="text-gray-400 hover:text-white mx-2">
            Home
          </Link>
          <Link to="/movies" className="text-gray-400 hover:text-white mx-2">
            Movies
          </Link>
          <Link to="/tv-shows" className="text-gray-400 hover:text-white mx-2">
            TV Shows
          </Link>
          <Link to="/about" className="text-gray-400 hover:text-white mx-2">
            About
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
