// src/pages/GalleryPage.js
import React, { useState, useEffect } from "react";
import Gallery from "../components/Gallery";

const GalleryPage = () => {
  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    // Fetch art pieces data from JSON Server API
    fetch("http://localhost:5000/artPieces")
      .then((response) => response.json())
      .then((data) => setArtPieces(data))
      .catch((error) => console.error("Error fetching art pieces:", error));
  }, []);

  return (
    <div>
      <h2>Gallery</h2>
      <Gallery artPieces={artPieces} />
    </div>
  );
};

export default GalleryPage;
