import React from "react";
import ArtCard from "./ArtCard";

function ArtCollection({ artCollection }) {
  if (!artCollection || artCollection.length === 0) {
    return <p></p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {artCollection.map((artPiece, artCollection) => (
        <ArtCard
          key={artCollection}
          currentArt={artPiece}
          onDelete={artCollection}
        />
      ))}
    </div>
  );
}
export default ArtCollection;
