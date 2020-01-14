import React from "react";
import Post from "./Post";

export default function PostList({ posts = [] }) {
  // default parameter, empty array
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
