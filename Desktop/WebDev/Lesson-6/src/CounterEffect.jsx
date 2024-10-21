import React, { useState , useEffect } from 'react'

function CounterEffect() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title="Value is "+count
    },[count])
  return (
    <>
    <p>Value of count is :{count}</p>
       <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
   
  )
}

export default CounterEffect