import React from 'react'

const products = [
{ id: 1, name: "Phone", price:'$699'},  
{ id: 2, name: "Laptop", price:'$1099'},  
{ id: 3, name: "watch", price:'$499'},  
]

function Product() {
  return (
    <div>
        {
            products.map((p) => (
                    <div key={p.id}>
                        <h1>Name:{p.name}</h1>
                        <h1>price:{p.price}</h1>
                    </div>
            ))
        }
    </div>
  )
}

export default Product