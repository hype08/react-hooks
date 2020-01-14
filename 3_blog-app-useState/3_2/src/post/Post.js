import React from "react";

export default function Post({ title, content, author }) {
  return (
    <>
      <h1>{title}</h1>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </>
  );
}
