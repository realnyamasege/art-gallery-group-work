// src/components/ArtPiece.js
import React from "react";


const ArtPiece = ({ artPiece }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <img
        src={artPiece.image}
        alt={artPiece.title}
        className="w-full h-auto rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{artPiece.title}</h3>
      <p className="text-sm">{artPiece.artist}</p>
    </div>
  );
};

export default ArtPiece;
