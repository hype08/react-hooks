import React, { useContext } from "react";
import { Link } from "react-navi";

import { ThemeContext } from "../contexts";

function Post({ id, title, content, author, short = false }) {
  const { secondaryColor } = useContext(ThemeContext);
  let processedContent = content;
  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + "...";
    }
  }
  return (
    <>
      <h3 style={{ color: secondaryColor }}>{title}</h3>
      <div>{processedContent}</div>
      {short && (
        <div>
          <br />
          <Link href={`/view/${id}`}>View full post</Link>
        </div>
      )}
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
    </>
  );
}

export default React.memo(Post);
