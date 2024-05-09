import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddArtForm() {
  // Form state
  const [imageUrl, setImageUrl] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Create a new art piece object
    const newArtPiece = {
      title,
      artist,
      imageUrl,
    };

    // Call the parent component's onAddArt handler with the new art piece
    fetch("http://localhost:3000/images", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArtPiece),
    })
      .then((res) => res.json())
      .then((data) => {
        // Reset the form fields
        setTitle("");
        setArtist("");
        setImageUrl("");
        // Navigate to the gallery
        navigate("/gallery");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-4 border rounded"
    >
      <input
        type="text"
        placeholder="Art Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded"
        required // Ensure the field is required
      />
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        className="p-2 border rounded"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Art
      </button>
    </form>
  );
}

export default AddArtForm; // Ensure proper export
