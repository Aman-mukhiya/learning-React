import React, { useState } from 'react';
import {useCounter} from "./counterReducer"

function Counter() {

  const {state, increment, decrement, IncrementByValue, DecrementByValue, reset} = useCounter();

  const[Increment_Value, setIncrement_Value] = useState(0);
  const[Decrement_Value, setDecrement_Value] = useState(0);

  const HandleSubmit = (e) => {
    e.preventDefault();

    IncrementByValue(Increment_Value);
    DecrementByValue(Decrement_Value);

    setIncrement_Value(0);
    setDecrement_Value(0);
  }

  return (

    <div>
      <h1><p>Counter:{state.count}</p></h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button><br/><br/>

      <form onSubmit={HandleSubmit}>
        <label value={Increment_Value}>Increment By Value </label>
        <input type="number" onChange={(e) => setIncrement_Value(e.target.value.trim())}/><br/><br/>

        <label value={Decrement_Value}>Decrement By Value </label>
        <input type="number" onChange={(e) => setDecrement_Value(e.target.value.trim())}/><br/><br/>

        <button type='Submit'>Update</button><br/><br/>
      </form>

      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter