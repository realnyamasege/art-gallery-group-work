import React from "react";

function ArtCard(props) {
  const { currentArt } = props; // Receive props
  const { id, title, artist, imageUrl } = currentArt; // Deconstruct properties

  function handleDelete(id) {
    fetch(`http://localhost:3000/images/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((res) => {
        alert("deleted");
        console.log(res);
      });
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="relative overflow-hidden h-56 rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{artist}</p>
        <hr className="my-4 border-t border-gray-300" />
        {/* Add Delete Button */}
        <button
          onClick={() => handleDelete(id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ArtCard;
