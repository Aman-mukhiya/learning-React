import React from 'react'

function Greeting({ timeOfDay }) {

    return(
        timeOfDay === "morning" ? <h1> good morning</h1> : <h1> good afternoon</h1> 
    )
  
    // timeOfDay==="goodmorning" ? "goodmorning":
    // timeOfDay==="afternoon" ? "afternoon"

    
}

export default Greeting