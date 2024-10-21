import React from 'react';

function ProductInfo() {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In stock"
  };

  return (
    <>
      <h2>Product Information</h2>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Availability: {product.availability}</p>
    </>
  );
}

export default ProductInfo;
