// import Person from "./Person"
// import Product from "./Product"

import Wheather from "./Wheather"
import UserStatus from "./UserStatus"
import Greeting from "./Greeting"


function App() {
 

  return (
 <>
   <Wheather temparature={23}/>
   <UserStatus LoggedIn={false} isAdmin={true}/>
   <Greeting timeOfDay={"morning"}/>

 
 </>
  )
}

export default App
