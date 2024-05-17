import React from "react";

export const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cart.map((product) => (
            <div key={product.id} className="border p-4 rounded-md shadow-md">
              <img
                src={product.image}
                alt={product.title}
                className="mb-4 mx-auto"
                style={{ maxWidth: "200px" }}
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-xl font-bold">${product.price}</p>
              <button
                onClick={() => removeFromCart(product)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
