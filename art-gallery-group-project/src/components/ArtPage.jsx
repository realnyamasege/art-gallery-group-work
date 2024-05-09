import React, { useEffect, useState } from "react";
import ArtCollection from "./ArtCollection";

function ArtPage() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((res) => res.json())
      .then((data) => {
        setArt(data);
      });
  }, []);
  return (
    <div>
      <ArtCollection artCollection={art} />
    </div>
  );
}

export default ArtPage;