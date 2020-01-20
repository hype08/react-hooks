import React, { useContext } from "react";
import { StateContext } from "../contexts";

import Post from "./Post";

export default function PostList() {
  const { state } = useContext(StateContext);
  const { posts } = state;

  return (
    <div>
      {posts.map((post, i) => (
        <>
          <Post {...post} key={`post-` + i} />
          {/* {...post} spread operator is same as 
          <Post title={post.title} content={post.content} author={post.author}/>
          */}
          <hr />
        </>
      ))}
    </div>
  );
}
