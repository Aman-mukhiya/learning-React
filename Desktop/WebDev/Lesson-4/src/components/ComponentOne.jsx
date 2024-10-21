import React from 'react'

const ComponentOne = ({count, onClickHandler}) => {

    const HandleClick = () => onClickHandler();

  return (
    <div>
        <p>{count}</p>
        {console.log(count)}
        <button onClick={HandleClick}>Increment</button>

    </div>
  )
}

export default ComponentOne;