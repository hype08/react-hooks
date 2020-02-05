import React, { useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { useNavigation } from "react-navi";
import { StateContext } from "../contexts";
import { useInput } from "react-hookedup";
import useUndo from 'use-undo';
export default function CreatePost() {
  const { state, dispatch } = useContext(StateContext);
  const { user } = state;
  const [undoContent, {
    set: setContent,
    undo, 
    redo, 
    canUndo, 
    canRedo
  }] = useUndo("")
  const content = undoContent.present
  const { value: content, bindToInput: bindContent } = useInput("");

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

  function handleContent(e) {
    setContent
  }

  function handleCreate() {
    createPost({ title, author: user, content });
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
          {...bindTitle}
          name="create-title"
          id="create-title"
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type="submit" value="Create" />
    </form>
  );
}
