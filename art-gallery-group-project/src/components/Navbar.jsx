import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Peupe Gallery
        </Link>
        <div>
          <Link
            to="/"
            className="text-white px-4 py-2 mx-2 hover:bg-gray-700 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white px-4 py-2 mx-2 hover:bg-gray-700 rounded"
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            className="text-white px-4 py-2 mx-2 hover:bg-gray-700 rounded"
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 120ef3b23ec6ab2ec64c28cc1d3e8c16111ecb6c
