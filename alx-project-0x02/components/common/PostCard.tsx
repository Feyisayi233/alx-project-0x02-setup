import React from "react";
import { type PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-md">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700 mb-2">{content}</p>
    <span className="text-sm text-gray-500">User ID: {userId}</span>
  </div>
);

export default PostCard;
