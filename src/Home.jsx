import React, { useEffect, useState } from 'react'
import Blog from './Blog.jsx'



function Home() {
const [blog, setBlog] = useState(null);
const [isPending, setIsPending] = useState(true);

useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(response => response.json())
    .then(data => {
        setBlog(data)
        setIsPending(false);
    })
    .catch(error => console.error('Error fetching blog:', error));
    
}, []);                                                                                 

  return (
    <div>
        {isPending && <div>Loading...</div>}
        {blog && <Blog blog={blog}/>}
    </div>
  )
}

export default Home