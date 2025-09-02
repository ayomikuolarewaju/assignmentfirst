import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        if (count === 0) {
           return window.alert(`Count cannot be less than ${count}`);;
          
        } 
        setCount(count - 1);
    }

  return (
    <div>

        <div>Counter</div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button> 

    </div>    
  )
}

export default Counter