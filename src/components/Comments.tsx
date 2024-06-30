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
    if (username && text) {
      addComment(productId, username, text);
      setUsername("");
      setText("");
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul className="mb-4">
        {comments
          .filter((comment) => comment.productId === productId)
          .map((comment, index) => (
            <li key={index} className="mb-2 p-4 bg-gray-100 rounded-lg">
              <strong className="block text-lg font-semibold">
                {comment.username}
              </strong>
              <p className="text-gray-700">{comment.text}</p>
            </li>
          ))}
      </ul>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Your comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-2 mb-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddComment}
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Comments;
