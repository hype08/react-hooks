import React, { useState, useContext } from "react";
import { StateContext } from "../contexts";

export default function CreatePost() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleCreate() {
    dispatch({ type: "CREATE_POST", title, content, author: user });
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
