import React, { useState } from "react";

function TodoList() {
  const [items, setItems] = useState(["mango", "apple"]);
  const [value, setValue] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    setItems([...items, value.trim()]);
    setValue("");
  };

  return (
    <div>
      <p>List of Fruits</p>
      <ol>
        {items.map((fruit) => (
          <li key={Math.random()}>{fruit}</li>
        ))}
      </ol>
      <form onSubmit={HandleSubmit}>
        <label> Enter TODO </label>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          value={value}
          placeholder="Enter TODO"
        />
        <br />
        <button type="submit">ADD TODO</button>
      </form>
    </div>
  );
}

export default TodoList;
