import React, { useState, useEffect } from "react";
import ProductList from "../../ProductList/ProductList";
import { getProducts } from "../../Services/Api";

export const Home = ({ addToCart, filter, setFilter }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">FakeStore E-commerce</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Home;
