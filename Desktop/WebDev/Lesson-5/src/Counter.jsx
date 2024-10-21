import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <p>Value of Count {count}</p>
        <button onClick={()=>{setCount(count+1)}}>Icrement</button>

    </div>
  )
}

export default Counter