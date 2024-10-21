import React from 'react'

function ComponentTwo({onClickHandler}) {
    const HandleClick = () => onClickHandler();

  return (
    <div>
        <button onClick={HandleClick}>Decrement</button>
    </div>
  )
}

export default ComponentTwo