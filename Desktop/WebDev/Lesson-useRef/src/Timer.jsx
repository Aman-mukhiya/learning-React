import React from "react";
import { useEffect } from "react";
import { useRef, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const value = useRef(null);

  useEffect(() => {
    value.current =  setInterval(() => {setCount((prev) => prev + 1)},1000);
   
  }, []);

  function StopInterval () {
    value.current = null;
  }

  return <>

  <h1><p>Count: {count}</p></h1>
  <button onClick={StopInterval}>Stop</button>
  </>;
}

export default Timer;
