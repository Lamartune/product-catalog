import React, { useState } from "react";
import { useComments } from "../context/CommentsContext";

interface CommentsProps {
  productId: number;
}

const Comments: React.FC<CommentsProps> = ({ productId }) => {
  const { comments, addComment } = useComments();
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");

  const handleAddComment = () => {
    addComment(productId, username, text);
    setUsername("");
    setText("");
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments
          .filter((comment) => comment.productId === productId)
          .map((comment, index) => (
            <li key={index}>
              <strong>{comment.username}</strong>
              <p>{comment.text}</p>
            </li>
          ))}
      </ul>
      <input
        type="text"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddComment}>Add Comment</button>
    </div>
  );
};

export default Comments;
