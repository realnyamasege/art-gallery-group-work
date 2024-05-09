import React, { useState } from 'react';

function CommentForm({ onAddComment }) {
  const [comment, setComment] = useState(''); // Local state for the comment input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
    if (comment.trim()) { // Check if the comment is not empty
      onAddComment(comment); // Call the parent handler to add the comment
      setComment(''); // Reset the comment input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={comment} // Controlled input
        onChange={(e) => setComment(e.target.value)} // Update the state
        className="p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default CommentForm;
