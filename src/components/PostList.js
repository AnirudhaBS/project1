// src/components/PostList.js
import React from "react";
import Post from "./Post";
import posts from "../data";

const PostList = () => {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.userId} post={post} />
      ))}
    </div>
  );
};

export default PostList;
