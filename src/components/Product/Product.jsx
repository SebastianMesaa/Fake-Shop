import React from "react";

export const Product = ({ product }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={product.image} alt={product.title} className="mb-4 mx-auto" style={{ maxWidth: "200px" }} />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-xl font-bold">${product.price}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
    </div>
  );
};

export default Product;
