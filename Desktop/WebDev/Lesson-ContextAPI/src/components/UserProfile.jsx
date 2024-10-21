import {React , useContext}from 'react'
import { NAME , AGE } from "./UserContext"

function UserProfile() {

  const myName  = useContext(NAME);
  const myAge = useContext(AGE);

  return (
    <>

    <p>My name is : {myName}</p>
    <p>My age is : {myAge}</p>
    </>
  )
}

export default UserProfile