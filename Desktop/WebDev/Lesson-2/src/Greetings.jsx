import React from 'react';

function Greetings() {
  const msg = "Hi there";
  const date = new Date();

  return (
    <>
      <h1>{msg}</h1>
      <p>Date: {date.getDate()}:{date.getMonth() + 1}:{date.getFullYear()}</p>
    </>
  );
}

export default Greetings;
