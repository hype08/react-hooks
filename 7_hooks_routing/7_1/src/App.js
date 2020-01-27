import React, { useReducer, useEffect, useState } from "react";
import { useResource } from "react-request-hook";

import "./App.css";
import PostList from "./post/PostList";
import { ThemeContext, StateContext } from "./contexts";
import appReducer from "./reducers";
import HeaderBar from "./pages/HeaderBar";

export default function App() {
  const [theme, setTheme] = useState({
    primaryColor: "deepskyblue",
    secondaryColor: "coral"
  });

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: [],
    error: ""
  });

  const { user, error } = state;

  const [posts, getPosts] = useResource(() => ({
    url: "/posts",
    method: "get"
  }));

  useEffect(getPosts, []);

  // dispatch ERROR message if failure to fetch.
  // dispatch FETCH_POSTS if data exists, and trigger it every time the post object updates.
  useEffect(() => {
    if (posts && posts.error) {
      dispatch({ type: "POSTS_ERROR" });
    }
    if (posts && posts.data) {
      dispatch({ type: "FETCH_POSTS", posts: posts.data.reverse() }); // newest posts listed first.
    }
  }, [posts]);

  useEffect(() => {
    if (user) {
      document.title = `${user} - React Hooks Blog`;
    } else {
      document.title = `React Hooks Blog`;
    }
  }, [user]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <div style={{ padding: 8 }}>
          <HeaderBar setTheme={setTheme} />
          <br />
          <hr />
          {error && <b> {error} </b>}
          <PostList />
        </div>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}
