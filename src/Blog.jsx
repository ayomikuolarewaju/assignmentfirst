import React from 'react'

function Blog({blog}) {
    
  return (
    <div>
        {blog.map((bl,index)=>(
            <div key={index}>
                <h2>{bl.title}</h2>
                <p>{bl.content}</p>
            </div>
        ))}
    </div>
  )
}

export default Blog