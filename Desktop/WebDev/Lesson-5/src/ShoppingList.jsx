import React, { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (name && quantity) {
    //   setItems({ name: { name }, Quantity: { quantity } });
    setItems((items) => [...items,{ name , quantity } ])
    }
    setName("");
    setQuantity("");
  };

  return (
    <>
      hello
      <h2>Cart Items</h2>
      <ul>
        {items.map(({ name, quantity }, index) => (
          <li key={index}>
            {" "}
            Name: {name} Quantity:{quantity}{" "}
          </li>
        ))}
      </ul>
      <form onSubmit={HandleSubmit}>
      <label>Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value.trim())} />
        <br />
        <br />

        <label>Quantity:</label>
        <input
          type="text"
          onChange={(e) => setQuantity(e.target.value.trim())}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ShoppingList;
