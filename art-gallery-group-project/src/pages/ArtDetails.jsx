// src/pages/ArtDetailsPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtDetailsPage = () => {
    const { id } = useParams(); // Get art piece ID from URL parameters
    const [artPiece, setArtPiece] = useState(null);

    useEffect(() => {
        // Fetch art piece details based on the ID
        fetch(`http://localhost:3000/artPieces/${id}`)
            .then(response => response.json())
            .then(data => setArtPiece(d
ata))
            .catch(error => console.error('Error fetching art piece details:', error));
    }, [id]);
if (!artPiece) {
        return <div>Loading...</div>; // Display a loading indicator while fetching data
    }

    return (
        <div>
            <h2>{artPiece.title}</h2>
            <p>Artist: {artPiece.artist}</p>
            {/* Add more details about the art piece */}
        </div>
    );
};

export default ArtDetailsPage;
// npm install -g json-server
// json-server --watch db.json --port 3000

// npm install react-router-dom