import React, { useReducer } from "react";

import "./App.css";
import UserBar from "./user/UserBar";
import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";

function postsReducer(state, action) {
  switch (action.type) {
    case "CREATE_POST":
      const newPost = {
        title: action.title,
        content: action.content,
        author: action.author
      };
      return [newPost, ...state];
    default:
      return new Error();
  }
}

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
    case "REGISTER":
      return action.username;
    case "LOGOUT":
      return "";
    default:
      throw new Error();
  }
}

const defaultPosts = [
  {
    title: "React Hooks",
    content: "The greatest thing since sliced bread",
    author: "Henry"
  },
  {
    title: "React Fragments",
    content: "The greatest thing since sliced bread",
    author: "Henry"
  }
];

export default function App() {
  const [user, dispatchUser] = useReducer(userReducer, "");
  const [posts, dispatchPosts] = useReducer(postsReducer, defaultPosts);

  return (
    <div style={{ padding: 8 }}>
      <UserBar user={user} dispatch={dispatchUser} />
      <br />
      {user && (
        <CreatePost user={user} posts={posts} dispatch={dispatchPosts} />
      )}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}
