import React, { useState } from 'react'
import "../Style.css";

const Todo = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

   const HandleSubmit = () => {
    setTodos((todos) => todos.concat({
        text: input,
        id: Math.floor(Math.random() *10)
    }));

    setInput("");
   }

   const removeTodo = (id) => setTodos(todos => todos.filter((t) => t.id != id))

  return (
    <div className='container'>
      <input type="text" 
      placeholder='New todo' 
      value={input} 
      onChange={(e) => setInput(e.target.value)}/>

      <button onClick={HandleSubmit}>Submit</button>

      <ul className="todos-list">
        {todos.map(({text, id}) => (
            <li className='todo' key={id}>
                <b>{text}</b>
                <button onClick={() => removeTodo(id)}>X</button>
            
            </li>
        ) ) }
      </ul>
    </div>
  )
}

export default Todo
