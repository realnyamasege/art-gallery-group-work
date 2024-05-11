import React, { useEffect, useState } from "react";
import ArtCollection from "./ArtCollection";

function ArtPage() {
  const [art, setArt] = useState([]);
  const [artCollection, setArtCollection] = useState([
    { id: 1, genre: ' portrait', artist: 'leornado', imageUrl: './Images/art1.jpg' },
    { id: 2, genre: 'contemporary', artist: 'tom', imageUrl: './Images/art2.jpg' },
    { id: 3, genre: 'fine art ', artist: 'davinci', imageUrl: './Images/art3.jpg' },
  ]);

  const handleDeleteArt = (id) => {
    setArtCollection(artCollection.filter(art => art.id !== id)); // Remove the art piece with the given ID
  };

  useEffect(() => {
    fetch("https://art-gallery-group-work.onrender.com/images")
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
      });
  }, []);
  return (
    <div>
      <ArtCollection artCollection={art} onDelete={handleDeleteArt}/>
    </div>
  );
}

export default ArtPage;