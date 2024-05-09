import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";



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
    <div className="bg-cyan-950">
      <h1 className="text-white text-2xl font-bold text-center">Add Art</h1>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.pixexid.com/vibrant-art-gallery-abstract-paintings-commanding-attention-under-the-strategic-s1z03dp1.webp?h=699&q=70')", width: "100%", height: "70%"}}>
        <div className="flex justify-center items-center ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-4 border rounded bg-white max-w-md"
            
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
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AddArtForm;