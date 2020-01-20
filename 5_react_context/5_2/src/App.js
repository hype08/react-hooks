import React, { useReducer, useEffect, useState } from "react";
import { ThemeContext } from "./contexts";

import "./App.css";
import UserBar from "./user/UserBar";
import CreatePost from "./post/CreatePost";
import PostList from "./post/PostList";
import Header from "./Header";
import appReducer from "./reducers";

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
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral"
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: defaultPosts
  });

  const { user, posts } = state;

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = `React Hooks Blog`;
    }
  }, [user]);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 8 }}>
        <Header text="React Hooks Blog" />
        <UserBar user={user} dispatch={dispatch} />
        <br />
        {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
        <br />
        <hr />
        <PostList posts={posts} />
      </div>
    </ThemeContext.Provider>
  );
}
