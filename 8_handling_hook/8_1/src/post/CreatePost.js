import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { useNavigation } from "react-navi";
import { StateContext } from "../contexts";

export default function CreatePost() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // pass post data to the createPost function.
  // we dont need to store the post in state, so ignore first value of array by not specifying it and putting a comma.
  const [post, createPost] = useResource(({ title, author, content }) => ({
    url: "/posts",
    method: "post",
    data: { title, author, content }
  }));

  const navigation = useNavigation();

  useEffect(() => {
    if (post && post.data) {
      dispatch({ type: "CREATE_POST", ...post.data });
      navigation.navigate(`/view/${post.data.id}`);
    }
  }, [post]);

  function handleCreate() {
    createPost({ title, author: user, content });
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
