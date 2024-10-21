import React, { useState } from 'react'

const Profile = () => {

  const [name , setName] = useState('');
  const [age , setAge] = useState('');

  return (
    <>
      <label> Name : {name}</label><br/>
      <label> Age : {age}</label><br/>

      <label >Update name</label>
      <input onChange = { (e) => setName(e.target.value.trim())}type="text"/><br/>

      <label >Update age</label>
      <input onChange = { (e) => setAge(e.target.value.trim())} type="number"/><br/>
    </>
  )
}

export default Profile