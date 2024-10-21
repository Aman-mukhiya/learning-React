
  import React from 'react'

  const userInfo = [

    {
      name:"Aman",
      email:"aman@gmail.com",
      location: "Nepal"
    },
    {
      name:"Raman",
      email:"Rman@gmail.com",
      location: "Nepal"
    },
    {
      name:"Baiju",
      email:"Baiju@gmail.com",
      location: "Nepal"
    }
  ]

  
  function ShowUser() {
    return (
      
        <main>
        {userInfo.map(({name,email,location}) => (
          <ul key={Math.random()}>
            <li>{name}</li>
            <li>{email}</li>
            <li>{location}</li>
  
          </ul>
        ))}
      </main>
        
    )
  }
  
  export default ShowUser;