import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section with Background Image */}
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${"./Images/museum-background.jpg"})`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Our Art Gallery</h1>
          <p className="mt-4 text-xl">
            Experience the beauty of contemporary art
          </p>
          <Link
            to="/gallery"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
          >
            Explore the Gallery
          </Link>
          <Link
            to="/add"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded"
          >
            Add Artwork
          </Link>
        </div>
      </div>

      {/* Gallery Highlights */}
      {/* <div className="p-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-6">Featured Artworks</h2>
        <div className="flex justify-center gap-8">
          <div className="w-1/3">
            <img
              src="./images/art1.jpg"
              alt="Art 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg">Artwork Title 1</p>
          </div>
          <div className="w-1/3">
            <img
              src="./images/art2.jpg"
              alt="Art 2"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg">Artwork Title 2</p>
          </div>
          <div className="w-1/3">
            <img
              src="./images/art3.jpg"
              alt="Art 3"
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg">Artwork Title 3</p>
          </div>
        </div>
      </div> */}

      {/* Navigation Links */}
    </div>
  );
};

export default LandingPage;
