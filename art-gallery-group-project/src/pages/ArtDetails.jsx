import React, { useState, useEffect } from "react";
// import ArtGallery from './ArtGallery.css'

function ArtGallery() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/artPieces") // Endpoint to fetch art pieces data
      .then((response) => response.json())
      .then((data) => {
        setArt(data);
      })
      .catch((error) => console.error("Error fetching art pieces:", error));
  }, []);

  return (
    <div className="art-Gallery">
      {art.map((artPiece) => (
        <div key={artPiece.id} className="art-Piece">
          <img src={artPiece.imageUrl} alt={artPiece.title} />
          <h2>{artPiece.title}</h2>
          <p>{artPiece.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ArtGallery;
