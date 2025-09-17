import React from "react";

function Blog({ blog }) {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blog.map((bl) => (
          <li key={bl.id} style={{ marginBottom: "1rem" }}>
            <h3>{bl.title}</h3>
            <p>{bl.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
