
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




