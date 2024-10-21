import React from 'react'

function UserStatus({LoggedIn , isAdmin}) {

  return(
    <>
    {LoggedIn && <h2> Welcome User</h2>}
    {isAdmin && <h2> Welcome Admin</h2>}
    </>
  );
}


export default UserStatus