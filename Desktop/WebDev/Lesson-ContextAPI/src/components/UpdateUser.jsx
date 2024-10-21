import {React , useContext, useState}from 'react'
import {setNAME , setAGE} from './UserContext'


function UpdateUser() {

    
const UpdateNAME =  useContext(setNAME);
const UpdateAGE =  useContext(setAGE);

const [currentName , setcurrentName] = useState('');
const [currentAge , setcurrentAge] = useState(0);

 

    const HandleSubmit = (e) => {

        e.preventDefault();
        UpdateNAME(currentName.trim());
        UpdateAGE(currentAge);
    
        setcurrentName("");
        setcurrentAge(0);
     }

  return (
    
    <>
      <form onSubmit={HandleSubmit}>
        <label> Name:</label>
        <input type="text" onChange={(e) => setcurrentName(e.target.value)}/><br/><br/>

        <label> Age:</label>
        <input type="number" onChange={(e) => setcurrentAge(e.target.value)}/><br/><br/>

        <button type='submit' >Update</button>

      </form>
    </>
  )
}

export default UpdateUser