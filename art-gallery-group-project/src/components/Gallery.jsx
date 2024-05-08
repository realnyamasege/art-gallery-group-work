import React from "react";
import ArtPiece from "./ArtPiece";

const Gallery = ({ artPieces }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {artPieces.map((artPiece) => (
        <ArtPiece key={artPiece.id} artPiece={artPiece} />
      ))}
    </div>
  );
};

export default Gallery;

/* //// import React from 'react';
// import ArtCard from "./ArtCard";

// function ArtCollection({ artCollection }) {
//   if (!artCollection || artCollection.length === 0) {
//     return <p></p>;
//   }

//   return (
//     <div className="grid grid-cols-4 gap-4">
//       {artCollection.map((artPiece, artCollection) => (
//         <ArtCard key={artCollection} currentArt={artPiece} />
//       ))}
//     </div>
//   );
// }

// export default ArtCollection;

// src/components/Gallery.js */
