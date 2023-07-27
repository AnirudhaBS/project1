// src/App.js
import React from "react";
import "./styles.css";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>100 Different Posts</h1>
      <PostList />
    </div>
  );
}

export default App;

