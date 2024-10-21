import React from 'react'
import { useRef } from 'react'

function FocusInput() {

    const inputElement = useRef(null);

  return (
    <>
      <input type="text" ref={inputElement} />
      <label>Focus at Input</label><br/><br/>
      <button onClick={() => inputElement.current.focus()}>Focus</button>
    </>
  )
}

export default FocusInput