import React, { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email); // Log email
    setEmail("");
  };

  return (
    <div
      className="h-screen bg-cover flex flex-col justify-center items-center"
      style={{ backgroundImage: url("./Images/museum-background.jpg") }}
    >
      <h1 className="text-4xl font-bold text-white mb-4">Welcome to Art Gallery</h1>
      <p className="text-lg text-white mb-6">Discover a world of creativity and inspiration.</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // Input is required
          className="p-2 rounded-md border border-gray-300 mb-4 w-64"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Join
        </button>
      </form>
    </div>
  );
}

export default Home;