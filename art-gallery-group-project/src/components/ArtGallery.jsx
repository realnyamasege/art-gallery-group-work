import React, { useState } from 'react';
import CommentForm from './CommentForm'; // Import the CommentForm component
import CommentList from './CommentList'; // Import the CommentList component

function ArtGallery() {
  const [comments, setComments] = useState([]); // State to store comments

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]); // Add the new comment to the state
  };

  return (
    <div>
      <h1 className="text-3xl mb-4">Art Gallery</h1>
      {/* Comment Form to submit new comments */}
      <CommentForm onAddComment={handleAddComment} /> 
      {/* Display the list of comments */}
      <CommentList comments={comments} />
    </div>
  );
}

export default ArtGallery; // Ensure proper export
