import React, { useEffect, useContext } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../contexts";
import PostList from "../post/PostList";

export default function HomePage() {
  const { state, dispatch } = useContext(StateContext);
  const { error } = state;
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

  return (
    <div>
      {error && <b> {error} </b>}
      <PostList />
    </div>
  );
}
