import React, { useEffect, useState } from 'react'
import Blog from './Blog.jsx'



function Home() {
const [blog, setBlog] = useState(null);
const [isPending, setIsPending] = useState(true);
const [empty, setEmpty] = useState("");

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/postss")
    .then(response => response.json())
    .then(data => {
        setBlog(data)
        setIsPending(false);  
        if(!data){
            setEmpty("No blog available");
            console.log(empty);
        }
    })
    .catch(error => console.error('Error fetching blog:', error));
    
}, [empty]);                                                                                 

  return (
    <div>
        {isPending && <div>Loading...</div>}
        {blog ? <Blog blog={blog}/> : <div><p>{empty}</p></div>}
    </div>
  )
}

export default Home