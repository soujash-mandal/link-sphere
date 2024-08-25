import React, { useState } from 'react'
import CommentInput from './CommentSection/CommentInput'
import CommentList from './CommentSection/CommentList'
import CommentSectionHeader from './CommentSection/CommentSectionHeader';

const CommentSection = () => {
    const [comments, setComments] = useState([
        // Example comments
        { id: 1, text: 'Great collection!', user: 'UserA', date: '2024-08-01T12:00:00Z' },
        { id: 2, text: 'I love these landscapes.', user: 'UserB', date: '2024-08-02T14:00:00Z' },
      ]);
    
      const handleAddComment = (commentText: string) => {
        const newComment = {
          id: comments.length + 1,
          text: commentText,
          user: 'Anonymous', // Replace with actual user if available
          date: new Date().toISOString(),
        };
        setComments([...comments, newComment]);
      };

    return (
        <>
            {/* Comment Section */}
            <CommentSectionHeader />
            <CommentInput onAddComment={handleAddComment} />
            <CommentList comments={comments} /></>
    )
}

export default CommentSection