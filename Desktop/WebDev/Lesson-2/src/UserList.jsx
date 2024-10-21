import React from 'react'

const users = [
    {id:1,name:"Alice",age:25},
    {id:2,name:"Bob", age:30},
    {id:3,name:"Charlie",age:27}
];

function UserList() {
  return (
    <div>
        <ol>
        {users.map(({id,name,age}) => (
            
            <>
            <li key={id}>{name}, age:{age}</li>
            
            </>
        ))}
        </ol>
    </div>
  )
}

export default UserList