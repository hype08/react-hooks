import React from "react";

import "./App.css";
import UserBar from "./user/UserBar";
import Post from "./post/Post";
import CreatePost from "./post/CreatePost";

function App() {
  return (
    <>
      <UserBar />
      <CreatePost />
      <Post
        title="React Hooks"
        content="The greatest thing since sliced bread"
        author="Henry"
      />
    </>
  );
}

export default App;
