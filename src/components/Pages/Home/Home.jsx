import React, { useState, useEffect } from "react";
import ProductList from "../../ProductList/ProductList";
import { getProducts } from "../../Services/Api";
import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";

export const Home = () => {
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

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <ProductList products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
