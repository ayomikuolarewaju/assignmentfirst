import React, { useEffect, useState } from "react";
import Blog from "./Blog.jsx";

function Home() {
  const [blog, setBlog] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        setIsPending(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      {!isPending && !error && blog.length > 0 && <Blog blog={blog} />}
      {!isPending && !error && blog.length === 0 && <p>No blogs available</p>}
    </div>
  );
}

export default Home;
