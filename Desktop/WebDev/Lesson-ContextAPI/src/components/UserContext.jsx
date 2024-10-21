import React, { createContext, useState } from 'react'
// import { useState , useContext } from 'react'
import UserProfile from './UserProfile';
import UpdateUser from './UpdateUser';

 export const NAME = createContext();
 export const AGE = createContext();

 export const setNAME= createContext();
 export const setAGE = createContext();

 

function UserContext() {

    const [name , setName] = useState('Aman');
    const [age , setAge] = useState(22);

    // const name = "Aman";
    // const age = 22;

  return (
   <>
    <NAME.Provider value={name}>
        <AGE.Provider value={age}>
            <UserProfile/>
        </AGE.Provider>
       </NAME.Provider>

       <setNAME.Provider value={setName}>
        <setAGE.Provider value={setAge}>
          <UpdateUser/>
        </setAGE.Provider>
       </setNAME.Provider>


   </>
       


    
  )
}

export default UserContext