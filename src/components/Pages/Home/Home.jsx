import React, { useState, useEffect } from "react";
import ProductList from "../../ProductList/ProductList";
import { getProducts, getCategories } from "../../Services/Api";

const Home = ({ addToCart, filter, setFilter }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const matchesFilter = product.title.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesFilter && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8">FakeStore E-commerce</h1>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded text-black placeholder-black"
      />
      <div className="mb-4">
        <label htmlFor="categories" className="block text-white">Categories:</label>
        <select
          id="categories"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="p-2 border border-gray-300 rounded text-black"
        >
          <option value="" className="text-black">All</option>
          {categories.map((category) => (
            <option key={category} value={category} className="text-black">
              {category}
            </option>
          ))}
        </select>
      </div>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Home;
