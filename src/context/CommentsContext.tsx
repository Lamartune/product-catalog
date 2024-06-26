import React, { createContext, useContext, useState, ReactNode } from "react";

interface Comment {
  productId: number;
  username: string;
  text: string;
}

interface CommentsContextType {
  comments: Comment[];
  addComment: (productId: number, username: string, text: string) => void;
}

const CommentsContext = createContext<CommentsContextType | undefined>(
  undefined
);

export const CommentsProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = (productId: number, username: string, text: string) => {
    setComments((prevComments) => [
      ...prevComments,
      { productId, username, text }
    ]);
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useComments = () => {
  const context = useContext(CommentsContext);
  if (context === undefined) {
    throw new Error("useComments must be used within a CommentsProvider");
  }
  return context;
};
