// src/components/Post.js
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      <h1 className="post-no">{post.it} </h1>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.body}</p>
    </div>
  );
};

export default Post;
