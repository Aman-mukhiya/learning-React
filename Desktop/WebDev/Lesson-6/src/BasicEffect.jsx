import React from 'react'
import { useEffect } from 'react'

function BasicEffect() {
  useEffect(() => {

    console.log('hello');
  },[]);

  return(
    <>
     <h1>Rendring First Time</h1>
    </>
  )
}

export default BasicEffect