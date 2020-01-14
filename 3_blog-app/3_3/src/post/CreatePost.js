import React, { useState } from "react";

export default function CreatePost({ user, posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleCreate() {
    const newPost = { title, content, author: user }; // new Post object definition
    setPosts([newPost, ...posts]);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title: </label>
        <input
          type="text"
          value={title}
          onChange={handleTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
}
