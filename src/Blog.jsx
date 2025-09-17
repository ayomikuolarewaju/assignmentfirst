import React from "react";

function Blog({ blog }) {
  return (
    <div>
      {blog.map((bl, index) => (
        <div key={index}>
          <ul>
            <p>{bl.title}</p>
            <li>{bl.body}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Blog;
