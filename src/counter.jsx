


import { useState } from "react";

function User() {

  const products = [
    { id: 1, name: "Watch", price: 2000 },
    { id: 2, name: "Wallet", price: 1500 },
    { id: 3, name: "Shoes", price: 3000 }
  ];

  return (
    <div>
      {products.map(product => (
        <p key={product.id}>
          {product.name} - Rs {product.price}
        </p>
      ))}
    </div>
  );
}

export default User;
